# config/initializers/carrierwave.rb

CarrierWave.configure do |config|
    config.fog_credentials = {
      # Configuration for Amazon S3 should be made available through an Environment variable.
      # For local installations, export the env variable through the shell OR
      # if using Passenger, set an Apache environment variable.
      #
      # In Heroku, follow http://devcenter.heroku.com/articles/config-vars
      #
      # $ heroku config:add S3_KEY=your_s3_access_key S3_SECRET=your_s3_secret S3_REGION=eu-west-1 S3_ASSET_URL=http://assets.example.com/ S3_BUCKET_NAME=s3_bucket/folder
  
      # Configuration for Amazon S3
      :provider              => 'AWS',
      :aws_access_key_id     => ENV['AWS_ACCESS_KEY_ID'],
      :aws_secret_access_key => ENV['AWS_SECRET_ACCESS_KEY'],
      :region                => ENV['AWS_REGION']
    }
  
    # For testing, upload files to local `tmp` folder.
    if Rails.env.development? || Rails.env.test? || Rails.env.cucumber?
      config.storage = :file
      config.enable_processing = false
      config.root = "#{Rails.root}"
      puts "******************************"
      puts "It's in carrierwave dev"
    else
      config.storage = :fog
      config.root = ENV['AWS_S3_ASSET_URL']
      puts "******************************"
      puts "It's in carrierwave prod"
    end
  
    config.cache_dir = "#{Rails.root}/tmp/uploads"                  # To let CarrierWave work on heroku
  
    config.fog_directory    = ENV['AWS_S3_BUCKET']
    # config.s3_access_policy = :public_read                          # Generate http:// urls. Defaults to :authenticated_read (https://)
    # config.fog_host         = "#{ENV['AWS_S3_ASSET_URL']}/#{ENV['AWS_S3_BUCKET']}"
    # s3.us-west-2.amazonaws.com
  end