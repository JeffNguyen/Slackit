class SessionsController < Devise::SessionsController
  # don't need because named different classes to avoid layout duplication
  # layout 'new_session', only: [:new, :create]
end