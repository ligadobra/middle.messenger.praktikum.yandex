import { TMessage } from "../types/request-data/messages";

export function checkNewMessage(message: TMessage) {
  return message.content && message.time;
}
