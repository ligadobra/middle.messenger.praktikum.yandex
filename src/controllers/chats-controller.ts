import { GetChatsApi } from "../api/chats";
import store from "../services/store";

export class ChartsController {
  static async getChats(): Promise<any> {
    return GetChatsApi.create().then((data: any) => {
      console.log(data)
      if (data) {
        store.set("chats", JSON.parse(data.response));
      }
    });
  }
}
