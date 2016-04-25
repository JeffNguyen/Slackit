Rails.application.routes.draw do

  devise_for :users
  devise_scope :user do
    authenticated :user do
      root :to => 'static_pages#root.html', as: :authenticated_root
    end
    unauthenticated :user do
      root :to => 'devise/sessions#new', as: :unauthenticated_root
    end
  end
	# root to: 'static_pages#root.html'

end


