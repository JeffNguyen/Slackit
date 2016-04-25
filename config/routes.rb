Rails.application.routes.draw do

  devise_for :users,
             :controllers => {:sessions => "sessions"}
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


