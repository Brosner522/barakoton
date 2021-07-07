class Workout < ApplicationRecord

    has_many :sessions
    has_many :users, through: :sessions
    has_many :bookmarked
end
