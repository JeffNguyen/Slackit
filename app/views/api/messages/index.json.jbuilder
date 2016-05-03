json.array!(@messages) do |message|
  json.email message.user.email
  json.partial!('message', message: message)
end