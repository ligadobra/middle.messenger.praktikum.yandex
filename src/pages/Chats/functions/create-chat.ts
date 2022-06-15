import { CreateChatsApi, GetChatsApi } from "../../../api/chats";
import store from "../../../services/store";
import { getCreateChatFormData } from "./get-chat-form-data";

export function createChat() {
  const formData = getCreateChatFormData();
  CreateChatsApi.create(formData.title).then((data) => {
    GetChatsApi.create().then((data: any) => {
      store.set("chats", JSON.parse(data.response));
    });
  });
}
