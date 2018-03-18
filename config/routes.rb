Rails.application.routes.draw do
  devise_for :users
  resources :articles
  post '/tinymce_assets' => 'tinymce_assets#create'
  get 'parceiras' => 'static_pages#parceiras', as: :parceiras
  get 'contato' => 'static_pages#contato', as: :contato
  get 'sobre-raiz-forte' => 'static_pages#sobre', as: :sobre
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: redirect('/articles')
end
