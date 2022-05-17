import Handlebars from "handlebars";
import tpl from "./chats-list.hbs";
import "../ChatsListItem/chats-list-item";
import "./chats-list.scss";

export const chats = {
  chats: [
    {
      name: "Игорь Пупкин",
      message: "qwertyqwertyqwertyqwertyqwerty",
      time: "18:02",
      unread: "3",
    },
    {
      name: "Игорь Пупкин",
      message: "qwertyqwertyqwertyqwertyqwerty",
      time: "18:02",
      unread: "3",
    },
    {
      name: "Игорь Пупкин",
      message: "qwertyqwertyqwertyqwertyqwerty",
      time: "18:02",
      unread: "3",
    },
  ],
};

Handlebars.registerPartial("chats-list", tpl(chats));

export default () => {
  return tpl();
};
