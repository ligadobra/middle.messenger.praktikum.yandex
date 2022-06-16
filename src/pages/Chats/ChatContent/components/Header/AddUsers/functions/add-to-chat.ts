import { AddUsersToChatApi, GetChatsApi } from "../../../../../../../api/chats";
import store from "../../../../../../../services/store";
import { getAddToChatListFormData } from "./get-add-to-chat-form-data";

export function addToChat() {
  const formData = getAddToChatListFormData();
  AddUsersToChatApi.create({
    users: formData.list.split(","),
    chatId: store.getState().currentChat.id,
  }).then((data) => {
    document
      .getElementsByClassName("add-to-chat-modal")[0]
      .classList.remove("modal-shown");
  });
}
