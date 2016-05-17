# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do

  User.create(username: 'Jeffrey Nguyen', email: 'user@email.com', password: 'password', anonymous: false)


  Channel.create!(name: 'AskReddit', public: true, message: false)
  Channel.create!(name: 'funny', public: true, message: false)
  Channel.create!(name: 'science', public: true, message: false)
  Channel.create!(name: 'pics', public: true, message: false)
  Channel.create!(name: 'gameofthrones', public: true, message: false)

  ChannelUser.create!(channel_id: 1, user_id: 1)
  ChannelUser.create!(channel_id: 2, user_id: 1)
  ChannelUser.create!(channel_id: 3, user_id: 1)
  ChannelUser.create!(channel_id: 4, user_id: 1)
  ChannelUser.create!(channel_id: 5, user_id: 1)

  5.times do |t|
    username = Faker::Internet.user_name
    email = Faker::Internet.safe_email
    password = Faker::Internet.password

    User.create!(username: username, email: email, password: password, anonymous: false)

    ChannelUser.create!(channel_id: 1, user_id: t+2)
    ChannelUser.create!(channel_id: 2, user_id: t+2)
    ChannelUser.create!(channel_id: 3, user_id: t+2)
    ChannelUser.create!(channel_id: 4, user_id: t+2)
    ChannelUser.create!(channel_id: 5, user_id: t+2)
  end

  Message.create!(text: 'Can I ask you a question?', user_id: 1, channel_id: 1)
  Message.create!(text: 'Knock Knock', user_id: 2, channel_id: 2)
  Message.create!(text: 'What\'s new?', user_id: 3, channel_id: 3)
  Message.create!(text: 'Check out the subreddit pics!', user_id: 4, channel_id: 4)
  Message.create!(text: 'Did anyone here catch yesterday\'s episode?' , user_id: 5, channel_id: 5)

  Message.create!(text: 'Yeah what is it?', user_id: 2, channel_id: 1)
  Message.create!(text: 'Whose there', user_id: 1, channel_id: 2)
  Message.create!(text: 'I love science!', user_id: 6, channel_id: 3)
  Message.create!(text: 'So cool', user_id: 1, channel_id: 4)
  Message.create!(text: 'Team Jon Snow' , user_id: 3, channel_id: 5)

end