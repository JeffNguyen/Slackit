class ChannelUser < ActiveRecord::Base
  validates :user, :channel, presence: true

  belongs_to :user
  belongs_to :channel
end
