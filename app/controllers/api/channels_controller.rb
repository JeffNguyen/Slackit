class Api::ChannelsController < ApplicationController

  def index
    # shows only the current user's channels
    @channels = current_user.channels
    render json: @channels
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      # if the channel is created, you want to immediately create a link in the join table with the current channel id and the current user id
      # avoids having to do another ajax post request in ApiUtil
      ChannelUser.create!(channel_id: @channel.id, user_id: current_user.id)
      render json: @channel
    else
     render json: {errors: @channel.errors.full_messages}, status: 302
    end
  end


  private

  def channel_params
    params.require(:channel).permit(:name, :public, :message)
  end

end
