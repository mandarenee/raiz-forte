class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :edit, :update, :destroy]

  def index
    @articles = Article.all
    @articles.each do |article|
      puts "****** art_id: #{ article.id } cat_id: #{ article.category_id } pub: #{ article.published } *******"
    end
  end

  def show
  end

  def new
    @article = Article.new
  end

  def edit
  end

  def create
    @article = Article.new(article_params)
    @article.body = sanitize(@article.body)

    if @article.save
      @categories = Category.where(id: article_params[:category_id])
      @article.categories << @categories
      redirect_to @article, notice: 'Article was successfully created.'
    else
      render :new
    end
  end

  def update
    article_params['body'] = sanitize(article_params['body'])
    if @article.update(article_params)
      @categories = Category.where(id: article_params[:category_id])
      @article.categories << @categories
      redirect_to @article, notice: 'Article was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @article.destroy
    redirect_to articles_url, notice: 'Article was successfully destroyed.'
  end

  def corpo
    puts "************ corpo ******************"
    call_super_category_index('corpo')
  end

  def mente
    puts "************ mente ******************"
    call_super_category_index('mente')
  end

  def alma
    puts "************ alma ******************"
    call_super_category_index('alma')
  end

  
  private
  def set_article
    @article = Article.find(params[:id])
  end

  def call_super_category_index(super_category)
    category_id = Category.super_category_ids[super_category]
    puts "************ super category: #{super_category} ******************"
    @articles = Article.joins(:categories).where("categories.super_category_id = ?", category_id)
    # puts "************ categories: #{categories.count} ******************"
    # puts "************ article count: #{@articles.count} ******************"
    render template: 'articles/index'
  end

  def sanitize(text)
    white_list_sanitizer = Rails::Html::WhiteListSanitizer.new
    body = text
    body = body.gsub("&nbsp\;", "<br/>")
    body = body.gsub("\n", "<br/>")
    body = white_list_sanitizer.sanitize(body, tags: %w(br strong), attributes: [])
  end

  def article_params
    params.require(:article).permit(:title, :body, :category_id, :description, :published)
  end
end
