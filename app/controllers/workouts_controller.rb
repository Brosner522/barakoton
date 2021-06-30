class WorkoutsController < ApplicationController

    def index 
        workouts = Workout.all
        render json: workouts 
    end

    def show
        workout = Workout.find_by(id: params[:id])
        if workout 
            render json: workout, status: :ok
        else
            render json: {error: "no workout found"}, status: :not_found
        end
    end

    
end