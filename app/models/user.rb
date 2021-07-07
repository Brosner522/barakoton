class User < ApplicationRecord

    has_many :sessions, dependent: :destroy 
    has_many :workouts, through: :sessions
    has_many :bookmarked

    validates :age, numericality: { greater_than_or_equal_to: 18 }
    validates :name, uniqueness: true
    
end

