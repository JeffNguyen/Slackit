class RegistrationsController < Devise::RegistrationsController
  # don't need because named different classes to avoid layout duplication
  # layout 'new_signup', only: [:new, :create]
  def create
    # inherit all functionality from Devise's Registration
    # add the ability to create join table link with newly created user

    super

    # will not create join table entry if unsuccessful registration
    unless current_user.nil?
      id = current_user.id
      ChannelUser.create!(channel_id: 1, user_id: id)
      ChannelUser.create!(channel_id: 2, user_id: id)
      ChannelUser.create!(channel_id: 3, user_id: id)
      ChannelUser.create!(channel_id: 4, user_id: id)
      ChannelUser.create!(channel_id: 5, user_id: id)

      # create custom private channel
      # subscribe
      channel_name = Faker::App.name
      Channel.create!(name: channel_name, public: false, message: false)
      channel_id = Channel.find_by(name: channel_name).id
      ChannelUser.create!(channel_id: channel_id, user_id: id)
    end
    
  end

  def sign_up_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :anonymous)
  end

  def account_update_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :current_password, :anonymous)
  end
end