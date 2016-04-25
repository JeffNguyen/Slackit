class RegistrationsController < Devise::RegistrationsController
  layout 'new_signup', only: [:new, :create]
end