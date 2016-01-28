Rails.application.routes.draw do
  root to: 'static_pages#root'
  resource :session, only: [:new, :create, :destroy]
   namespace :api, defaults: { format: :json } do
     resources :stamps, only: [:create] do
       resources :comments, only: :create
     end
     resources :users, only: :show do
       resource :follow, only: [:create, :destroy]
     end
     resource :feed, only: :show
   end
   resources :users, only: [:new, :create, :update]
end
