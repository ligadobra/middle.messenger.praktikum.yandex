import { CreateChatsApi, GetChatsApi } from "../../../api/chats";
import { checkMenuClick } from "../../../functions/check-menu-click";
import store from "../../../services/store";
import { getCreateChatFormData } from "./get-chat-form-data";

export function createChat() {
  const formData = getCreateChatFormData();
  CreateChatsApi.create(formData.title).then((data) => {
    GetChatsApi.create().then((data: any) => {
      store.set("chats", JSON.parse(data.response));
    });
  });

  setTimeout(() => {
    checkMenuClick();
  }, 1000);
}
