import { Message } from "../messages.model";
/** Represents the response we sending back to the client 
   when he asks to get his messages. */

export interface GetMessagesDto {
  recipient: string;
  messages: Message[];
}

// todo: make it a class
