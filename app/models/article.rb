class Article < ApplicationRecord
    has_and_belongs_to_many :categories
    default_scope { order(created_at: :asc) }
    extend FriendlyId
    friendly_id :title, use: :slugged

    def should_generate_new_friendly_id?
        slug.nil? || title_changed?
    end
end
