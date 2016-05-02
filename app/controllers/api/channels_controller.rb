class Api::ChannelsController < ApplicationController

  def index
    @channels = current_user.channels
    render json: @channels

    # # this works if I pass in the id specifically in the ajax index request - look at api util commented out
    # user = User.find(params[:id])
    # @channels = user.channels
    # render json: @channels
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
