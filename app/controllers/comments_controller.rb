class CommentsController < ApplicationController
  def create
    Comment.create(text: comment_params[:text], tweet_id: comment_params[:tweet_id], user_id: current_user.id)
    redirect_to "/tweets/#{comment_params[:tweet_id]}"
  end

  private

  def comment_params
    params.permit(:text, :tweet_id)
  end
end
