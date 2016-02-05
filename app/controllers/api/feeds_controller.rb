class Api::FeedsController < ApplicationController
  def show
    @current_user = current_user
    feed = current_user.feed
    @stamps = Kaminari.paginate_array(feed).page(params[:page]).per(10)
    @total_count = feed.length
  end
end
