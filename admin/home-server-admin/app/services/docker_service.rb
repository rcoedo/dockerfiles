require "open3"

class DockerService
  def initialize
  end

  def get_containers
    out, err = execute("ls")
    if err
      raise err
    end
    out
  end

  private
  def execute(*command)
    _, stdout, stderr, wait_thr = Open3.popen3(*command)
    out = stdout.gets(nil)
    stdout.close
    err = stderr.gets(nil)
    stderr.close
    return wait_thr.value.success? ? out : out, err
  end
end
