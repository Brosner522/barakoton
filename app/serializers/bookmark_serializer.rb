class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :workout_id
end
