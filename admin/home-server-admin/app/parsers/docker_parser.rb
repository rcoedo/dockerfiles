module DockerParser
  class << self
    def parse_ps(output)
      output.lines().from(1)
        .map { |line| line.chomp }
        .map do |line|
        fields = line.split(%r{\s{2,}})
        Container.new(id:      fields[0],
                      image:   fields[1],
                      command: fields[2][1..-2],
                      since:   fields[3],
                      status:  fields[4],
                      ports:   fields[5],
                      name:    fields[6])
      end
    end
  end
end
