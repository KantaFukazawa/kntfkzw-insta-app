class PostsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :destroy]

  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.create(post_params)
    if @post.save
      redirect_to posts_path(@post), notice: '保存に成功しました。'
    else
      flash.now[:alert] = '保存に失敗しました。'
      render :new
    end
  end


  def destroy
    post = current_user.posts.find(params[:id])
    post.destroy!
    redirect_to root_path, notice: '削除しました。'
  end

  private
    def post_params
      params.require(:post).permit(:content, images: [])
    end
end