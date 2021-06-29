class SessionSerializer < ActiveModel::Serializer
  attributes :id, :notes, :user_id, :workout_id
end
