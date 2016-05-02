class Channel < ActiveRecord::Base

  validates :name, presence: true
  validates :public, :message, inclusion: {in: [true, false]}

  has_many :messages

  has_many :channel_users

  has_many :users, through: :channel_users, source: :user

end
