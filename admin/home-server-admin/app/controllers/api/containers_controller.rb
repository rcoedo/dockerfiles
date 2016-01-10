module Api
  class ContainersController < BaseController
    def index
      respond_with Container.new(name: "aaa")
    end
  end
end
