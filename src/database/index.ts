import { Message } from "../entities/messages/messages.model";

export const messages: Message[] = [
  {
    sender: "Dekel Bayazi",
    recipient: "Neriya Cohen",
    content:
      "Hey! Just wanted to let you know that Tikal have Showed interest in me :)",
    id: "18b68480-5b3d-4c0a-ac20-66f48c89152d",
    date: new Date("2022-02-20T20:02:18.839Z"),
  },

  {
    sender: "Neriya Cohen",
    recipient: "Dekel Bayazi",
    content: "Thats great! I wish you nothing but success :)",
    id: "f2cb5cc5-f9da-4d64-911f-d689a0f828e6",
    date: new Date("2022-02-20T20:05:04.664Z"),
  },

  {
    sender: "Dekel Bayazi",
    recipient: "Neriya Cohen",
    content: "Thank you! I will keep you posted.",
    id: "c5a306a1-83b7-4fb7-bc4a-0dd7f76649b3",
    date: new Date("2022-02-20T20:06:06.100Z"),
  },
];
