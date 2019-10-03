class MessageChannel < ApplicationCable::Channel

  def subscribed
    Rails.logger.debug "ActionCable connection count: #{ActionCable.server.connections.length}"

    @message = Message.find(params[:message_id])
    stream_for @message
  end

  def unsubscribed

  end

  def unsubscribe_from_channel

  end

end
