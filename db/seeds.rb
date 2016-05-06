# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
  User.create!(username: 'Jeffrey Nguyen', email: 'user@email.com', password: 'password')

  Channel.create!(name: 'nba', public: true, message: false)
  Channel.create!(name: 'soccer', public: true, message: false)
  Channel.create!(name: 'nfl', public: true, message: false)
  Channel.create!(name: 'pics', public: true, message: false)
  Channel.create!(name: 'funny', public: true, message: false)

  ChannelUser.create!(channel_id: 1, user_id: 1)
  ChannelUser.create!(channel_id: 2, user_id: 1)
  ChannelUser.create!(channel_id: 3, user_id: 1)
  ChannelUser.create!(channel_id: 4, user_id: 1)
  ChannelUser.create!(channel_id: 5, user_id: 1)

  5.times do |t|
    username = Faker::Name.name
    email = Faker::Internet.email
    password = Faker::Internet.password

    User.create!(username: username, email: email, password: password)
    ChannelUser.create!(channel_id: 1, user_id: t+2)
    ChannelUser.create!(channel_id: 2, user_id: t+2)
    ChannelUser.create!(channel_id: 3, user_id: t+2)
    ChannelUser.create!(channel_id: 4, user_id: t+2)
    ChannelUser.create!(channel_id: 5, user_id: t+2)
  end

  Message.create!(text: 'NBA', user_id: 1, channel_id: 1)
  Message.create!(text: 'SOCCER', user_id: 2, channel_id: 2)
  Message.create!(text: 'NFL', user_id: 3, channel_id: 3)
  Message.create!(text: 'PICS', user_id: 4, channel_id: 4)
  Message.create!(text: 'FUNNY' , user_id: 5, channel_id: 5)

end