import { Schema, model } from "mongoose";
import Joi from "joi";

/** Represents the message object the way it is being written 
  into our database. */
export interface Message {
  sender: string;
  recipient: string;
  content: string;
  id: string;
  date: Date;
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
  recipient: Joi.string().min(3).max(20).required(),
  content: Joi.string().min(1).required(),
});

/**
 * Represents the mongodb document using 'mongoose Model'.
 */
export const MessageModel = model<Message>("Message", MessageSchema);
