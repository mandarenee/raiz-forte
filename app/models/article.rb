class Article < ApplicationRecord
    has_and_belongs_to_many :categories
    default_scope { order(created_at: :asc) }
end
