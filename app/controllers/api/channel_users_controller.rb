class Api::ChannelUsersController < ApplicationController
  def create
    # look into strong params next time, this is a hack
    channel_id = Integer(params[:channel_user][:id])
    @channel_users = ChannelUser.new(channel_id: channel_id, user_id: current_user.id)
    # @channel_users = ChannelUser.new(channel_user_params)
    # @channel_users.user_id = current_user.id
    if @channel_users.save
      render json: @channel_users
    else
      render json: {errors: @channel_users.errors.full_messages}, status: 302
    end
  end

  private

  def channel_user_params
    params.require(:channel_user).permit(:id)
  end

end
