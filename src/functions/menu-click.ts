import { GetChatTokenApi } from "../api/messages";
import { ChartsController } from "../controllers/chats-controller";
import { useWebSockets } from "../hooks/useWebSockets";
import store from "../services/store";
import { checkMenuClick } from "./check-menu-click";

export function menuClick(index) {
  ChartsController.getChats().then(() => {
    GetChatTokenApi.create(store.getState()?.chats[index].id).then(
      (data: any) => {
        store.set("currentChat.token", JSON.parse(data.response).token);
        useWebSockets(
          store.getState()?.user.id,
          store.getState()?.chats[index].id,
          store.getState()?.currentChat.token,
          true,
          () => {
            store.set("currentChat", store.getState()?.chats[index]);
            document.getElementsByClassName("chat-list-item")[index].className =
              "chat-list-item chat-list-item__active";
            checkMenuClick();
          }
        );
      }
    );
  });
}
