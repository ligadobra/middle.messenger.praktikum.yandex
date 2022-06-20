import tpl from "./chat-content-header.hbs";
import Separator from "../../../../../components/separator";
import Dropdown from "../../../../../components/dropdown";
import "./chat-content-header.scss";
import Button from "../../../../../components/button";
import { DeleteChatsApi, GetChatsApi } from "../../../../../api/chats";
import store from "../../../../../services/store";

export const SeparatorComponent = new Separator("div", {
  attr: {
    class: "separator",
  },
});

export const ButtonOne = new Button("div", {
  attr: {
    class: "button_filled",
  },
  text: "Добавить пользователя",
  events: {
    click: (e: MouseEvent) => {
      e.stopPropagation();
      document
        .getElementsByClassName("add-to-chat-modal")[0]
        .classList.add("modal-shown");
      document
        .getElementsByClassName("dropdown")[0]
        .classList.remove("dropdown-shown");
    },
  },
});

export const ButtonTwo = new Button("div", {
  attr: {
    class: "button_filled",
  },
  text: "Удалить чат",
  events: {
    click: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      DeleteChatsApi.create(store.getState().currentChat.id).then(() => {
        GetChatsApi.create().then((data: any) => {
          store.set("chats", JSON.parse(data.response));
        });
      });
      document
        .getElementsByClassName("dropdown")[0]
        .classList.remove("dropdown-shown");
    },
  },
});

export const DropdownChat = new Dropdown("div", {
  attr: {
    class: "dropdown",
  },
  ButtonOne,
  ButtonTwo,
});

export default tpl;
