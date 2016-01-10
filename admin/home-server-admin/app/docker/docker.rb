require "rest_client"

module Docker
  def self.get(path, connection)
    RestClient.get("#{connection.url}#{path}")
  end

  def self.get_containers(connection)
    self.get("/containers/json", connection)
  end

  class Connection
    attr_reader :url

    def initialize(url)
      @url = url
    end
  end
end
