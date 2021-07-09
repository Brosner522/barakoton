class User < ApplicationRecord
    has_secure_password

    has_many :sessions, dependent: :destroy 
    has_many :workouts, through: :sessions
    has_many :bookmarks
    has_many :bookmarked_workouts, through: :bookmarks, source: :workout

    
    validates :age, numericality: { greater_than_or_equal_to: 18 }
    validates :name, uniqueness: true
    
end

