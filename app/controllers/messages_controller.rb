class MessagesController < ApplicationController

  def index
    @message = Message.find_or_create_by(id: 1)
  end

  def refresh_test
    NotifyUpdateJob.perform_later(Message.last)
    redirect_to root_path
  end

end
