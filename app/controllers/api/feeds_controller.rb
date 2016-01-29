class Api::FeedsController < ApplicationController
  def show
    @current_user = current_user
    @stamps = current_user.feed
  end
end
