class CreateSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :sessions do |t|
      t.string :notes
      t.integer :user_id
      t.integer :workout_id
      
      t.timestamps
    end
  end
end
