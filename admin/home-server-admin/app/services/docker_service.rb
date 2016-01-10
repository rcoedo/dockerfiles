require "open3"
require "docker_command"

class DockerService
  def initialize
  end

  def get_containers
    out, err = DockerCommand.ps()
    if err then raise err end
    DockerParser.parse_ps(out)
  end
end
