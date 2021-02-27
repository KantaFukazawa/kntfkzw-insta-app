class PostsController < ApplicationController
  def index
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
    def post_params
      params.require(:post).permit(:content, :image)
    end
end