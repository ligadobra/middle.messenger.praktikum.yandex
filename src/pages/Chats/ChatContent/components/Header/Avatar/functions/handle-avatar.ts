import { ChangeChatAvatarApi } from "../../../../../../../api/chats";
import store from "../../../../../../../services/store";

export function handleChatAvatar() {
  const formData = new FormData();

  formData.append("avatar", this.files[0]);
  formData.append("userId", store.getState()?.currentChat?.id.toString())

  ChangeChatAvatarApi.create(formData).then((data: any) => {
    if (data) {
      store.set("chats.avatar", JSON.parse(data?.response)?.avatar);
    }
  });
}
