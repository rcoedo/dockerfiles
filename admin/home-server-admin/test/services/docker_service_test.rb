require "test_helper"

class DockerServiceTest < ActiveSupport::TestCase
  describe DockerService do
    it "it parses the container output" do
      puts DockerService.new().get_containers
    end
  end
end
