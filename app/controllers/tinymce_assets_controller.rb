class TinymceAssetsController < ApplicationController
    respond_to :json
  
    def create
        geometry = Paperclip::Geometry.from_file params[:file]
        image    = Image.create params.permit(:file, :alt, :hint)
        puts "**************************************"
        puts image.file.url
        puts "**************************************"
        render json: {
            image: {
                url:    image.file.url,
                height: geometry.height.to_i,
                width:  geometry.width.to_i
            }
        }, content_type: "text/html"
    end
end
