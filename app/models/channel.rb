class Channel < ActiveRecord::Base

  validates :name, :selected, presence: true

  has_many :messages
end
