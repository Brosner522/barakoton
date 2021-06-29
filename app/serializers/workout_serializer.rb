class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :video, :time, :difficulty, :type, :coach
end
