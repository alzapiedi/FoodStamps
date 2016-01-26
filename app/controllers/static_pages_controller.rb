class StaticPagesController < ApplicationController
  before_action :verify_login
  def root
  end
end
