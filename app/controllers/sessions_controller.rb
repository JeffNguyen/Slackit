class SessionsController < Devise::SessionsController
  layout 'new_session', only: [:new, :create]
end