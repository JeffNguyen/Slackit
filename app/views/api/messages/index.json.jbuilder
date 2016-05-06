json.array!(@messages) do |message|
  json.time message.created_at.strftime("%l:%M %p") 
  json.email message.user.email
  json.username message.user.username
  json.partial!('message', message: message)
end