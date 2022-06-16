import { GetChatTokenApi } from "./api/messages";
import Handlebars from "handlebars";
import { currentPath } from "./constants/system";
import { ChartsController } from "./controllers/chats-controller";
import { UserController } from "./controllers/user-controller";
import { goToRoute } from "./functions/go-to-route";
import { useRouter } from "./hooks/useRouter";
import { getMessages, useWebSockets } from "./hooks/useWebSockets";
import {
  AuthLayoutComponentIn,
  AuthLayoutComponentUp,
  DefaultLayoutComponent,
  ProfileComponent,
} from "./layouts/create-layouts";
import routes from "./routes";
import store from "./services/store";

Handlebars.registerHelper(
  "when",
  function (operand_1, operator, operand_2, options) {
    var operators = {
        eq: function (l, r) {
          return l == r;
        },
        noteq: function (l, r) {
          return l != r;
        },
        gt: function (l, r) {
          return Number(l) > Number(r);
        },
        or: function (l, r) {
          return l || r;
        },
        and: function (l, r) {
          return l && r;
        },
        "%": function (l, r) {
          return l % r === 0;
        },
      },
      result = operators[operator](operand_1, operand_2);

    if (result) return options.fn(this);
    else return options.inverse(this);
  }
);

Handlebars.registerHelper("date", function (date) {
  const newDate = new Date(date);
  return `${newDate.getHours()}:${newDate.getMinutes()}`;
});

const router = useRouter(".app");

router
  .use(routes.home, AuthLayoutComponentIn)
  .use(routes.signup, AuthLayoutComponentUp)
  .use(routes.messenger, DefaultLayoutComponent)
  .use(routes.settings, ProfileComponent)
  .start();

UserController.getUser().catch(() => {
  goToRoute(routes.home);
});

if (currentPath === routes.messenger) {
  ChartsController.getChats().then(() => {
    store.set("currentChat", store.getState()?.chats[0]);
    GetChatTokenApi.create(store.getState()?.chats[0].id).then((data: any) => {
      store.set("currentChat.token", JSON.parse(data.response).token);
      const WSIInstance = useWebSockets(
        store.getState()?.user.id,
        store.getState()?.chats[0].id,
        store.getState()?.currentChat.token
      );
    });
    const items = document.getElementsByClassName("chat-list-item");
    for (let i = 0; i < items.length; ++i) {
      items[i].addEventListener("click", () => {
        store.set("currentChat", store.getState()?.chats[i]);
      });
    }
  });
}
