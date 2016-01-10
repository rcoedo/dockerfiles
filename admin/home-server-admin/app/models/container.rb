class Container
  include ActiveModel::Serialization
  include ActiveModel::Model

  attr_accessor :id
  attr_accessor :name
  attr_accessor :image
  attr_accessor :since
  attr_accessor :status
  attr_accessor :ports
end
