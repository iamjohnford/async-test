class NotifyUpdateJob < ApplicationJob

  def perform(message)
    MessageChannel.broadcast_to message, text: "Hello"
  end

end
