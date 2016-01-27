class Api::FeedsController < ApplicationController
  def show
    @stamps = current_user.feed
  end
end
