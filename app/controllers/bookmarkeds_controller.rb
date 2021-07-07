class BookmarkedsController < ApplicationController


    def index
        bookmarkeds = Bookmarked.all
        render json: bookmarks 
    end

    def destroy 
        bookmarked = Bookmarked.find_by(id: params[:id])
        if bookmarked  
            bookmarked.destroy
            render json: {}, status: :no_content
        else 
            render json: {error: "no user found!"}, status: :not_found
        end
    end

    def create
        bookmarked = Bookmarked.create(bookmarked_params)
        render json: bookmarked
    end

    private 
    
    def bookmarked_params
        params.permit(:user_id, :workout_id)
    end
end
