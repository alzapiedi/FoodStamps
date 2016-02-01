Rails.application.routes.draw do
  root to: 'static_pages#root'
   namespace :api, defaults: { format: :json } do
     get "search", to: "stamps#search"
     resource :session, only: [:show, :create, :destroy]
     resources :stamps, only: [:create] do
       resources :comments, only: :create
       resource :like, only: [:create, :destroy]
     end
     resources :users, only: [:show, :create] do
       resource :follow, only: [:create, :destroy]
     end
     resource :feed, only: :show
   end
   resources :users, only: [:new, :create, :update]
end
