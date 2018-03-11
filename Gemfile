source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.1'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'jquery-rails'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'dotenv-rails', require: 'dotenv/rails-now'
gem 'slim-rails'
gem 'font-awesome-rails'
gem 'bootstrap-sass'
gem 'autoprefixer-rails'
gem 'social-share-button'
gem 'friendly_id'
gem 'aws-sdk'
gem 'devise'
gem 'pundit'
gem 'tinymce-rails'
gem 'tinymce-rails-imageupload', github: 'PerfectlyNormal/tinymce-rails-imageupload'
gem 'paperclip', git: 'git://github.com/thoughtbot/paperclip.git'
gem 'carrierwave'
gem 'mini_magick'
gem 'fog'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'sqlite3'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

ruby '2.3.0'