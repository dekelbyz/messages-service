/** Represents the object we are programmed to receive from the client 
   as he requests to send a new message. */
export interface SendMessageDto {
  recipient: string;
  content: string;
}
