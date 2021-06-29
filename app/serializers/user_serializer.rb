class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :age, :weight, :password
end
