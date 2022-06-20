import { GetChatsApi } from "../api/chats";
import { checkMenuClick } from "../functions/check-menu-click";
import store from "../services/store";

export class ChartsController {
  static async getChats(): Promise<any> {
    return GetChatsApi.create().then((data: any) => {
      if (data) {
        store.set("chats", JSON.parse(data.response));
        checkMenuClick();
      }
    });
  }
}
