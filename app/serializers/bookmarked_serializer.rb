class BookmarkedSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :integer, :workout_id, :integer
end
