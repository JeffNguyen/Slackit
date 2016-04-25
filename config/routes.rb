Rails.application.routes.draw do

  devise_for :users,
             :controllers => {:sessions => "sessions", :registrations => "registrations"},
             :skip => [:passwords]

  # for specifying exact routes within devise users
  # can't find controller if its nested inside devise folder
  # as :user do
  #   get "/users/sign_up" => "devise/registrations#new", :as => :new_user_registration
  #   post "/users" => "devise/registrations#create", :as => :user_registration
  #   delete "/users" => "devise/registrations#destroy", :as => :edit_user_registration
  # end
  devise_scope :user do
    authenticated :user do
      root :to => 'static_pages#root.html', as: :authenticated_root
    end
    unauthenticated :user do     
      # changed because new layout needed to be defined in sessions_controller
      # root :to => 'devise/sessions#new', as: :unauthenticated_root
      root :to => 'sessions#new', as: :unauthenticated_root
    end
  end

	# root to: 'static_pages#root.html'

end


