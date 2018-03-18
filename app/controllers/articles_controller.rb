class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :edit, :update, :destroy]

  def index
    @articles = Article.all
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
      redirect_to @article, notice: 'Article was successfully created.'
    else
      render :new
    end
  end

  def update
    article_params['body'] = sanitize(article_params['body'])
    if @article.update(article_params)
      redirect_to @article, notice: 'Article was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @article.destroy
    redirect_to articles_url, notice: 'Article was successfully destroyed.'
  end

  private
    def set_article
      @article = Article.find(params[:id])
    end

    def sanitize(text)
      white_list_sanitizer = Rails::Html::WhiteListSanitizer.new
      body = text
      body = body.gsub("&nbsp\;", "<br/>")
      body = body.gsub("\n", "<br/>")
      body = white_list_sanitizer.sanitize(body, tags: %w(br strong), attributes: [])
    end

    def article_params
      params.require(:article).permit(:title, :body, :description, :published)
    end
end
