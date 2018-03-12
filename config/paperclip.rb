unless Rails.env.development?
	Paperclip::Attachment.default_options.merge!(
		url: ':s3_domain_url',
		path: '/:class/:attachment/:id_partition/:style/:filename',
		storage: :s3,
		s3_credentials: {
		  bucket: 				ENV['AWS_S3_BUCKET'],
		  access_key_id: 		ENV['AWS_ACCESS_KEY_ID'],
		  secret_access_key: 	ENV['AWS_SECRET_ACCESS_KEY']
		}
	)
end
