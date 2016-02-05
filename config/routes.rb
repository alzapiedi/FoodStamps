Rails.application.routes.draw do
  root to: 'static_pages#root'
  get 'auth/facebook/callback', to: 'sessions#omniauth_facebook'
   namespace :api, defaults: { format: :json } do
     get "search", to: "stamps#search"
     resources :locations, only: [:show]
     resources :comments, only: :destroy
     resource :session, only: [:show, :create, :destroy]
     resources :stamps, only: [:create] do
       resources :comments, only: :create
       resource :like, only: [:create, :destroy]
     end
     resources :users, only: [:show, :create, :update] do
       resource :follow, only: [:create, :destroy]
     end
     resource :feed, only: :show
   end
   resources :users, only: [:new, :create, :update]
end
