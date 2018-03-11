Rails.application.routes.draw do
  devise_for :users
  resources :articles
  post '/tinymce_assets' => 'tinymce_assets#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: redirect('/articles')
end
