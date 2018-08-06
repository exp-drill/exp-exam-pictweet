class TweetsController < ApplicationController
  before_action :move_to_index

  def index
    @tweets = Tweet.includes(:user).order('created_at DESC').page(params[:page]).per(2)
  end

  def new
    @tweet = Tweet.new
  end

  def create
    Tweet.create(tweet_params)
  end

  def destroy
    tweet = Tweet.find(params[:id])
    tweet.destroy  if tweet.user_id == current_user.id
  end

  def edit
    @tweet = Tweet.find(params[:id])
  end

  def update
    tweet = Tweet.find(params[:id])
    tweet.update(tweet_params) if tweet.user_id == current_user.id
  end

  def show
    @tweet = Tweet.find(params[:id])
    @comments = @tweet.comments.includes(:user)
  end

  private

  def tweet_params
    params.require(:tweet).permit(:image, :text).merge(user_id: current_user.id)
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end
end
