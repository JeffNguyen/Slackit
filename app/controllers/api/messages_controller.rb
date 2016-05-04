class Api::MessagesController < ApplicationController
  # weirdness with csrf and 2 sessions in same window and caching or something
  # Can't verify CSRF token authenticity
  # Completed 422 Unprocessable Entity in 2ms (ActiveRecord: 0.0ms)
  # ActionController::InvalidAuthenticityToken - ActionController::InvalidAuthenticityToken:

  # skip_before_action :verify_authenticity_token

  # can you filter messages here instead of in the MessageStore based on Channel ID
  def index
    # includes to avoid N+1 query
    # JBuilder adds user.email as JSON to the messages array getting passed to client side
    # filter the channel id here instead of on client side - so we only return messages
    # associated with the specific channel id passed in as a parameter in the AJAX call
    @channel_id = Integer(params[:channel_id])
    @messages = Message.includes(:user).where(["channel_id = ?", @channel_id])
    render :index
  end

  def create
    @message = Message.new(message_params)

    # can use JBuilder to tack on extra information, associations, etc ActiveRecord stuff
    # don't need username, since in index - we can tack it on using user association
    @message.user_id = current_user.id

    if @message.save
      Pusher.trigger('messages', 'new_message', {
        # need id to pass in for unique key in react
        # passing message object back to pusher on client side 
        # don't necessarily need to return an object because we will always call fetchAllMessages 
        # which will give us the most up to date messages (since we already created a new one)
        message: {id: @message.id, text: params[:message][:text], user_messages: current_user.messages}
      })

      # there is a lag when using render json: @message because when we create a message, it gets added
      # to the _messages in MessageStore - and emits change. The reason there is lag is because an email
      # is not passed through initially when creating a message so the first render doesn't have an email. 
      # It only renders properly with the email when fetchAllMessages gets called (where the JBuilder will 
      # package the email to pass down the pipeline). We can't simply comment out the emitChange in 
      # createMessage because in some cases - you want emitChange to happen twice (when you are currently 
      # writing messages - you want to emitChange on createMessage and fetchAllMessages)
      # the case where emitChange happens only once is when you are listening to other messages in the 
      # channel - you will only fetchAllMessages in chatroom.bind
      
      # Solution - we include email in JBuilder to pass down
      # it also is consistent with the index JBuilder, always a good idea to have store emit change based
      # on any type of change to internal structure

      # REASON WHY THERE IS A LAG WHEN USING render json: @message - READ ABOVE
      # render json: @message

      render :create
    else
      render json: {errors: @message.errors.full_messages}, status: 302
    end
  end

  private

  def message_params
    # the message in require corresponds to the data left side identifier in ajax call
    # typically speaking, the symbol in require is what is used in the views html erb
    # an example would be message[username], message[text] when filling out html
    # in ajax, need to pass in a objects hash with message pointing to contents text and channel_id
    params.require(:message).permit(:text, :channel_id)
  end

end
