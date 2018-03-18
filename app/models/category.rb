class Category < ActiveRecord::Base
    has_and_belongs_to_many :articles
    enum super_category_id: [:corpo, :mente, :alma]
end