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

    def create
        bookmark = Bookmark.create(bookmark_params)
        render json: bookmark
    end

    private 
    
    def bookmark_params
        params.permit(:user_id, :workout_id)
    end
end
