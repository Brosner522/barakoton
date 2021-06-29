class User < ApplicationRecord
    has_many :sessions 
    has_many :workouts, through: :sessions

    
end
