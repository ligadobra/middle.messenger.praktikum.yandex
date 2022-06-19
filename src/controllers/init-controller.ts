import { GetUserApi } from "../api/auth";
import { GetChatsApi } from "../api/chats";
import { GetChatTokenApi } from "../api/messages";
import { checkMenuClick } from "../functions/check-menu-click";
import { goToRoute } from "../functions/go-to-route";
import routes from "../routes";
import store from "../services/store";
import { WSModel } from "../services/websockets";
import { ChartsController } from "./chats-controller";

export function firstInit() {
  GetUserApi.create().then((data: any) => {
    store.set("user", JSON.parse(data.user.response));
    GetChatsApi.create().then((data: any) => {
      store.set("chats", JSON.parse(data.response));
      goToRoute(routes.messenger);
    });
  });
  initChats();
  setTimeout(() => {
    checkMenuClick();
  }, 2000);
}

export function initChats() {
  ChartsController.getChats();

  setInterval(() => {
    WSModel.instance.send(
      JSON.stringify({
        type: "ping",
      })
    );
  }, 20000);
}
