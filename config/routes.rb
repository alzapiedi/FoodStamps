Rails.application.routes.draw do
  root to: 'static_pages#root'
  resource :session, only: [:new, :create, :destroy]
   namespace :api, defaults: { format: :json } do
     resources :stamps, only: [:create]
     resources :users, only: :show do
       resource :follow, only: [:create, :destroy]
     end
     resource :feed, only: :show
   end
   resources :users, only: [:new, :create, :update]
end
