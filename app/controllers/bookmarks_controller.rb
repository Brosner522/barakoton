class BookmarksController < ApplicationController


    def index
        bookmarks = Bookmark.all
        render json: bookmarks 
    end

    def destroy 
        bookmark = Bookmark.find_by(id: params[:id])
        if bookmark  
            bookmark.destroy
            render json: {}, status: :no_content
        else 
            render json: {error: "no bookmark found!"}, status: :not_found
        end
    end

    def toggle
        bookmark = current_user.bookmarks.find_by(workout_id: bookmark_params[:workout_id])
        if bookmark 
            bookmark.destroy
            render json: {}
        else
            bookmark = current_user.bookmarks.create(bookmark_params)
            render json: bookmark, status: :created
        end
    end

    private 
    
    def bookmark_params
        params.permit(:workout_id)
    end
end
