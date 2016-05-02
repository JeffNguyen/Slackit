class Api::ChannelUsersController < ApplicationController
  
  def create
    # this route is matched when you create a ChannelUser in the client side by passing in an email (trying to link a user to the channel)
    # basically adding a user by email

    #params for client side -> channelUser
    #params {'channel_user' => {'id' => '9', 'email' => 'jeff@gmail.com'}}

    # look into strong params next time, this is a hack
    # extracting string id from channel json object and turning into integer
    channel_id = Integer(params[:channel_user][:id])

    email = params[:channel_user][:email]
    user_to_add = User.find_by(email: email)

    # if there is no email in the database
    if user_to_add.nil?
      render json: {errors: 'No email found'}, status: 302
      # need to print error in client side in modal
    else
      @channel_users = ChannelUser.new(channel_id: channel_id, user_id: user_to_add.id)
      if @channel_users.save
        render json: @channel_users
      else
        render json: {errors: @channel_users.errors.full_messages}, status: 302
      end
    end

  end

  private

  def channel_user_params
    params.require(:channel_user).permit(:id, :email)
  end

end
