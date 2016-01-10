require "json"

class DockerService
  def initialize
    @connection = Docker::Connection.new(ENV["docker_url"])
  end

  def get_containers
    JSON.parse(Docker.get_containers (@connection))
  end
end
