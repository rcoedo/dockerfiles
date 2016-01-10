require "json"

class HomeController < ApplicationController
  def index
    @globalInitState = {:containers => DockerService.new().get_containers}
  end
end
