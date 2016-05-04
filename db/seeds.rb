# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
  User.create!(email: 'user@email.com', password: 'password')

  Channel.create!(name: 'ALL', public: true, message: false)
  Channel.create!(name: 'NBA', public: true, message: false)
  Channel.create!(name: 'MLB', public: true, message: false)
  Channel.create!(name: 'POLITICS', public: true, message: false)
  Channel.create!(name: 'MOVIES', public: true, message: false)

  ChannelUser.create!(channel_id: 1, user_id: 1)
  ChannelUser.create!(channel_id: 2, user_id: 1)
  ChannelUser.create!(channel_id: 3, user_id: 1)
  ChannelUser.create!(channel_id: 4, user_id: 1)
  ChannelUser.create!(channel_id: 5, user_id: 1)

  5.times do |t|
    password = Faker::Internet.password
    email = Faker::Internet.email
    # devise already uses BCrypt
    # encrypted_password = BCrypt::Password.create(password)
    User.create!(email: email, password: password)
    ChannelUser.create!(channel_id: 1, user_id: t+2)
    ChannelUser.create!(channel_id: 2, user_id: t+2)
    ChannelUser.create!(channel_id: 3, user_id: t+2)
    ChannelUser.create!(channel_id: 4, user_id: t+2)
    ChannelUser.create!(channel_id: 5, user_id: t+2)
  end

  Message.create!(text: 'Testing global', user_id: 1, channel_id: 1)
  Message.create!(text: 'Testing basketball', user_id: 2, channel_id: 2)
  Message.create!(text: 'Testing baseball', user_id: 3, channel_id: 3)
  Message.create!(text: 'Testing politics', user_id: 4, channel_id: 4)
  Message.create!(text: 'Testing movies' , user_id: 5, channel_id: 5)

end