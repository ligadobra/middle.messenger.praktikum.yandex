import tpl from "./chats-sidebar.hbs";
import Link from "../../../components/link";
import TextField from "../../../components/text-field";
import ChatsList from "./components/ChatsList";
import { goToRoute } from "../../../functions/go-to-route";
import routes from "../../../routes";
import Button from "../../../components/button";
import { LogoutApi } from "../../../api/auth";
import { createChat } from "../functions/create-chat";
import "./chats-sidebar.scss";

function logout() {
  LogoutApi.create();
  goToRoute(routes.home);
}

export const LinkComponent = new Link("div", {
  attr: {
    class: "link",
  },
  events: {
    click: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      goToRoute(routes.settings);
    },
  },
  isBack: false,
  text: "Профиль пользователя",
});

export const ButtonLogoutComponent = new Button("div", {
  attr: {
    class: "button_filled",
  },
  text: "Выйти",
  events: {
    click: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      logout();
    },
  },
});

export const SearchComponent = new TextField("div", {
  attr: {
    class: "chats-sidebar__search",
  },
  name: "search",
  placeholder: "Поиск",
});

export const CreateChatTitle = new TextField("div", {
  attr: {
    class: "chats-sidebar__input",
  },
  name: "chat-title",
  placeholder: "Название чата",
});

export const CreateChatButton = new Button("div", {
  attr: {
    class: "button_filled",
  },
  text: "Создать",
  events: {
    click: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      createChat();
    },
  },
});

export const ChatsListComponent = new ChatsList("div", {
  attr: {
    class: "chats-list",
  },
});

export default tpl;
