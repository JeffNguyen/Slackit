# config/initializers/pusher.rb
require 'pusher'

Pusher.app_id = '201017'
Pusher.key = '620a5490a2480b3fe75a'
Pusher.secret = '9944d44470d21f40f053'
Pusher.logger = Rails.logger
Pusher.encrypted = true
