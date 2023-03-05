Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]

    #how should I handle the nesting of my routes?
    #makes sense that you can only create and show but what about for destroy?
    #since a user can only delete their own post, do I need to nest that under a user?
    resources :restaurants, only: [:index, :show] do
      resources :reviews, only: [:create, :index, :destroy]
    end


  end

  get '*path', to: "static_pages#frontend_index"
end
