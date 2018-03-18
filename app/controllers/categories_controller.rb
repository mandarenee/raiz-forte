class CategoriesController < ApplicationController
  
    def index
      @categories = Category.all
    end
  
    def show
        @category = Category.find(params[:id])
    end
  
    def new
      @category = Category.new
    end
  
    def create
      @category = Category.new(category_params)
  
      if @category.save
        redirect_to @category, notice: 'Category was successfully created.'
      else
        render :new
      end
    end
  
    def edit
    end
  
    def update
      if @category.update(category_params)
        redirect_to @category, notice: 'Category was successfully updated.'
      else
        render :edit
      end
    end
  
    def destroy
      @category.destroy
      redirect_to categories_path, notice: 'Category was successfully destroyed.'
    end

    def corpo
        @categories = Category.where(super_category_id: Category.super_category_ids['corpo'])
        render template: 'categories/index'
    end

    def mente
        call_super_category_index('mente')
    end

    def alma
        call_super_category_index('alma')
    end

    def call_super_category_index(super_category)
        @categories = Category.where(super_category_id: Category.super_category_ids[super_category])
        render template: 'categories/index'
    end
  
    private
  
    def set_category
      @category = Category.find(params[:id])
    end
  
    def category_params
      params.require(:category).permit(:name, :super_category_id)
    end
  
  end
  