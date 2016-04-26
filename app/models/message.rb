class Message < ActiveRecord::Base
  validates :username, :text, presence: true

  belongs_to :user
  
end
