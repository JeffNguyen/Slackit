json.array!(@messages) do |message|
  json.username message.user.username
  json.partial!('message', message: message)
end