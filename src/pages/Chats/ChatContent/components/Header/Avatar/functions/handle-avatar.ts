import {
  ChangeChatAvatarApi,
  GetChatsApi,
} from "../../../../../../../api/chats";
import store from "../../../../../../../services/store";

export function handleChatAvatar() {
  const formData = new FormData();

  formData.append("avatar", this.files[0]);
  formData.append("chatId", store.getState()?.currentChat?.id.toString());

  ChangeChatAvatarApi.create(formData).then((data: any) => {
    if (data) {
      store.set("currentChat.avatar", JSON.parse(data?.response)?.avatar);
      store.set("chats.avatar", JSON.parse(data?.response)?.avatar);
    }
  });
}
