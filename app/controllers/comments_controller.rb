class CommentsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    post = Post.find(params[:post_id])
    @comment = post.comments.build
    @comments = post.comments
    render json: @comments, include: { user: [:profile] }
  end

  def create
    post = Post.find(params[:post_id])
    @comment = post.comments.build(comment_params)
    @comment.save!
    render json: @comment, include: { user: [:profile] }
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:content).merge(user_id: current_user.id)
  end
end