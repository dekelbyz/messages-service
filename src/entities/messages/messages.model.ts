/* Represents the object we programmed to receive from the client 
   as he requests to send a new message. 
   (POST: /messages/send ) */
export interface SendMessageRequest {
  sender: string;
  recipient: string;
  content: string;
}

/* Represents the message object the way it is being written 
  into our database. */
export interface Message {
  sender: string;
  recipient: string;
  content: string;
  id: string;
  date: Date;
}

/* Represents the response we sending back to the client 
   when he asks to get his messages. */
export interface ReceiveMessages {
  recipient: string;
  messages: Message[];
}
