class Message < ActiveRecord::Base
  validates :user, :channel, :text, presence: true

  belongs_to :user
  belongs_to :channel
end
