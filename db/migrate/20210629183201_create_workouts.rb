class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :video
      t.string :time
      t.integer :difficulty
      t.string :workout_type
      t.string :coach

      t.timestamps
    end
  end
end
