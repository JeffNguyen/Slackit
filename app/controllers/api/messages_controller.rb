class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    
    if @message.save
      Pusher.trigger('messages', 'new_message', {
        message: params[:message]
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
