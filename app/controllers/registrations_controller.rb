class RegistrationsController < Devise::RegistrationsController
  # don't need because named different classes to avoid layout duplication
  # layout 'new_signup', only: [:new, :create]
end