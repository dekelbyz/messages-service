import { Schema, model } from "mongoose";
import Joi from "joi";

/** Represents the object we are programmed to receive from the client 
   as he requests to send a new message. */
export interface SendMessageRequest {
  recipient: string;
  content: string;
}

/** Represents the message object the way it is being written 
  into our database. */
export interface Message {
  sender: string;
  recipient: string;
  content: string;
  id: string;
  date: Date;
}

/** Represents the response we sending back to the client 
   when he asks to get his messages. */
export interface ReceiveMessages {
  recipient: string;
  messages: Message[];
}

/** Represents the Mongoose Schema. */
export const MessageSchema = new Schema<Message>({
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
});

/**
We use Joi Schemas to represent the stracture of the data that we're expecting
to receive from the client. 
 */
export const sendMessageSchema = Joi.object({
  recipient: Joi.string().alphanum().min(3).max(20).required(),
  content: Joi.string().min(1).required(),
});

/**
 * Represents the mongodb document using 'mongoose Model'.
 */
export const MessageModel = model<Message>("Message", MessageSchema);
