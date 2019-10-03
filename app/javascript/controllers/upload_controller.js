import { Controller } from "stimulus"
import consumer from "../channels/consumer"

export default class extends Controller {

  static targets = []

  connect() {
    if (!this.messageChannel || this.messageChannel.consumer.connection.disconected) {
      console.log("creating subscription")
      this.messageChannel = consumer.subscriptions.create( { channel: 'MessageChannel', message_id: this.data.get('message-id') }, {
        connected() {
          // Called when the subscription is ready for use on the server
        },

        disconnected() {
          // Called when the subscription has been terminated by the server
        },

        received(data) {
          console.log("Received", data)
        }
      });
    }
    else {
      console.log("Reusing connection")
    }
  }

  disconnect() {
    if (this.messageChannel) {
      console.log("unsubscribe")
      this.messageChannel.unsubscribe()
      this.messageChannel = null
    }
  }

}
