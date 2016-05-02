class Channel < ActiveRecord::Base

  validates :name, :selected, presence: true

  has_many :messages

  has_many :channel_users

  has_many :users, through: :channel_users, source: :user

end
