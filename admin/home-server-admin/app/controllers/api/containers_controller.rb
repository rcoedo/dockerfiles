module Api
  class ContainersController < BaseController
    def index
      respond_with DockerService.new().get_containers()
    end
  end
end
