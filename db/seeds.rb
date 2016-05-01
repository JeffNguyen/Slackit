# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(email: 'user@email.com', password: 'password')

5.times do 
  password = Faker::Internet.password
  email = Faker::Internet.email
  # devise already uses BCrypt
  # encrypted_password = BCrypt::Password.create(password)
  User.create!(email: email, password: password)
end

Channel.create!(name: 'ALL', selected: 'true');
Channel.create!(name: 'NBA', selected: 'false');
Channel.create!(name: 'MLB', selected: 'false');
Channel.create!(name: 'POLITICS', selected: 'false');
Channel.create!(name: 'MOVIES', selected: 'false');

Message.create!(username: 'Global says', text: 'Testing global', user_id: 1, channel_id: 1);
Message.create!(username: 'Basketball says', text: 'Testing basketball', user_id: 2, channel_id: 2)
Message.create!(username: 'Baseball says', text: 'Testing baseball', user_id: 3, channel_id: 3)
Message.create!(username: 'Politics says', text: 'Testing politics', user_id: 4, channel_id: 4)
Message.create!(username: 'Movies says', text: 'Testing movies' , user_id: 5, channel_id: 5)