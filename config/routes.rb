Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  resources :users
  resources :sneakers
  resources :carts


  post '/current_user', to: 'auth#show'
  post '/login', to: 'auth#create'



end
