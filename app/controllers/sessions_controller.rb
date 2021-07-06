class SessionsController < ApplicationController

    def index
        sessions = Session.all 
        render json: sessions 
    end

    def create 
        session = Session.create(session_params)
        render json: session 
    end

    def update
        # byebug 
        session = Session.find_by(id: params[:id])
        if session 
            session.update(session_params)
            render json: session, status: :accepted
        else 
            render json: {error: "session not found!"}, status: :bad_request
        end
    end


    private 

    def session_params
        params.require(:session).permit(:notes, :user_id, :workout_id)
    end

end

