class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    # building add ons to the message, could extract this to jbuilder later
    @message.username = current_user.email
    @message.user_id = current_user.id
    
    if @message.save
      Pusher.trigger('messages', 'new_message', {
        # need id to pass in for unique key in react
        message: {id: @message.id, username: current_user.email, text: params[:message][:text], user_messages: current_user.messages}
      })    
      render json: @message
    else
      render json: {errors: @message.errors.full_messages}, status: 302
    end
  end

  private

  def message_params
    # the message in require corresponds to the data left side identifier in ajax call
    # typically speaking, the symbol in require is what is used in the views html erb
    # an example would be message[username], message[text] when filling out html
    # in ajax, need to pass in a objects hash with message pointing to contents username and text
    params.require(:message).permit(:username, :text)
  end

end
