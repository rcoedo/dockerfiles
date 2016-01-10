module Command
  def self.run(*command)
    _, stdout, stderr, wait_thr = Open3.popen3(*command)
    out = stdout.gets(nil)
    stdout.close
    err = stderr.gets(nil)
    stderr.close
    return wait_thr.value.success? ? out : out, err
  end
end
