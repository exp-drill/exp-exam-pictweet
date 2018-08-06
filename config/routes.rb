Rails.application.routes.draw do
  root 'tweets#index'
  devise_for :users
  resources :tweets do
    resources :comments
  end

  resources :users, only: :show
end
