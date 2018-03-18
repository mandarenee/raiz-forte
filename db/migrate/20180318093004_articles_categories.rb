class ArticlesCategories < ActiveRecord::Migration[5.0]
  def change
    create_join_table :articles, :categories do |t|
      t.index [:article_id, :category_id]
    end
  end
end
