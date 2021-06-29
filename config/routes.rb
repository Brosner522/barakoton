Rails.application.routes.draw do
  
  resources :workouts, only: [:index, :show]
  resources :sessions, only: [:create, :update]
  resources :users, only: [:create, :update, :destroy, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
