class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :edit, :update, :destroy]

  def index
    @articles = Article.all
  end

  def show
    @article = Article.friendly.find(params[:id])
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
      @article.categories = @categories
      redirect_to @article, notice: 'Article was successfully created.'
    else
      render :new
    end
  end

  def update
    @article = Article.friendly.find(params[:id])
    article_params['body'] = sanitize(article_params['body'])
    if @article.update(article_params)
      @categories = Category.where(id: article_params[:category_id])
      unless @article.categories.where(id: @categories.first.id).exists?
        @article.categories = @categories
      end
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
    call_super_category_index('corpo')
  end

  def mente
    call_super_category_index('mente')
  end

  def alma
    call_super_category_index('alma')
  end

  
  private
  def set_article
    @article = Article.friendly.find(params[:id])
  end

  def call_super_category_index(super_category)
    category_id = Category.super_category_ids[super_category]
    @articles = Article.joins(:categories).where("categories.super_category_id = ?", category_id)
    render template: 'articles/index'
  end

  def sanitize(text)
    white_list_sanitizer = Rails::Html::WhiteListSanitizer.new
    body = text
    body = body.gsub("&nbsp\;", "<br/>")
    body = body.gsub("\n", "<br/>")
    body = body.gsub("width=560\" width=\"560\" height=\"315\"", '')
    body = white_list_sanitizer.sanitize(body, tags: %w(div iframe a href br strong), attributes: %w(href border overflow src show_text frameborder scrolling allowfullscreen))
    open_div = "<div id='fb-video'>"
    closing_div = "</div>"
    body = [open_div, body, closing_div].join('')
    # byebug
    # body.insert(0, `&lt;div id=\”fb-video\”&gt;`)
    # body << `&lt;div/&gt;`
  end

  def article_params
    params.require(:article).permit(:title, :body, :category_id, :description, :published)
  end
end
