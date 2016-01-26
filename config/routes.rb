Rails.application.routes.draw do
  root to: 'static_pages#root'
  resource :session, only: [:new, :create, :destroy]
   namespace :api, defaults: { format: :json } do
     resources :stamps, only: [:create, :index, :show]
   end
   resources :users, only: [:new, :create]
end
