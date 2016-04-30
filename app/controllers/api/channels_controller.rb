class Api::ChannelsController < ApplicationController

  def index
    @channels = Channel.all

    render json: @channels
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      render json: @channel
    else
     render json: {errors: @channel.errors.full_messages}, status: 302
    end
  end


  private

  def channel_params
    params.require(:channel).permit(:name, :selected)
  end

end
