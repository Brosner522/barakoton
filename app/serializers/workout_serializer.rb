class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :video, :time, :difficulty, :workout_type, :coach
end
