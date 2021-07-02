class User < ApplicationRecord

    has_many :sessions, dependent: :destroy 
    has_many :sessions
    has_many :workouts, through: :sessions

    validates :age, numericality: { greater_than_or_equal_to: 18 }
    validates :name, uniqueness: true
end

