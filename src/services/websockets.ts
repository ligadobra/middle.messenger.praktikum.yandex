import { WSChats } from "../constants/api-instances";

export class WSModel {
  public static instance;
  constructor() {}

  public static init(id: number, chatId: number, token: string) {
    const instance = new WebSocket(
      WSChats + "/" + [id, chatId, token].join("/")
    );
    if (WSModel.instance !== instance) {
      WSModel.instance = instance;
    }
    return WSModel.instance;
  }
}
