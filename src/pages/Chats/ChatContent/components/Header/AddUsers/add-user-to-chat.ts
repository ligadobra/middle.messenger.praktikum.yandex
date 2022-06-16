import tpl from "./add-user-to-chat.hbs";
import TextField from "../../../../../../components/text-field";
import Button from "../../../../../../components/button";
import { addToChat } from "./functions/add-to-chat";
import "./add-user-to-chat.scss";

export const AddUsersListComponent = new TextField("div", {
  attr: {
    class: "add-to-chat-list__input",
  },
  name: "add-to-chat-list",
  label: "Укажите через запятую список id пользователей",
  placeholder: "30,97,154",
});

export const AddUsersButtonComponent = new Button("div", {
  attr: {
    class: "button_filled",
  },
  text: "Добавить",
  events: {
    click: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      addToChat();
    },
  },
});

export default tpl;
