class MessagesController < ApplicationController

  def index
    Message.find_or_create_by(id: 1)
  end

  def upload
    # Happens most often with...
    @message = Message.with_attached_images.find(1)

    # Happens sometimes with...
    # @message = Message.find(1)

    # This line is sometimes throwing an error like:
    # ActiveRecord::RecordNotUnique (PG::UniqueViolation: ERROR:  duplicate key value violates unique constraint "index_active_storage_attachments_uniqueness"
    # DETAIL:  Key (record_type, record_id, name, blob_id)=(Message, 1, images, 1122) already exists.
    @message.images.attach(params[:files])

    head :ok
  end

end
