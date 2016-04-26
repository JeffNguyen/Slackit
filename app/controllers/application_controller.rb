class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_user

  private

  def set_user
    if current_user.nil?

    else
      cookies[:username] = current_user.email || 'guest'
    end
  end

end
