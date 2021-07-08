Rails.application.routes.draw do
  
  resources :bookmarks, only: [:index, :destroy, :create]
  post "/login", to: "users#login";
  resources :workouts, only: [:index, :show];
  resources :sessions, only: [:index, :create, :update];
  resources :users, only: [:index, :show, :create, :update, :destroy, :me];
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


