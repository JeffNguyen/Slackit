# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(email: 'user@email.com', password: 'password')

50.times do 
  password = Faker::Internet.password
  email = Faker::Internet.email
  # devise already uses BCrypt
  # encrypted_password = BCrypt::Password.create(password)
  User.create!(email: email, password: password)
end