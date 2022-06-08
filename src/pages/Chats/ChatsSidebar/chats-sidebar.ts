import tpl from "./chats-sidebar.hbs";
import Link from "../../../components/link";
import TextField from "../../../components/text-field";
import ChatsList from "./components/ChatsList";
import "./chats-sidebar.scss";
import { currentPath } from "../../../constants/system";

const isProfilePage = currentPath === "/profile";

const chats = {
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

export const LinkComponent = new Link("div", {
  attr: {
    class: "link",
  },
  isBack: isProfilePage ? true : false,
  url: isProfilePage ? "/chats" : "/profile",
  text: isProfilePage ? "Назад к чату" : "Профиль пользователя",
});

export const SearchComponent = new TextField("div", {
  attr: {
    class: "chats-sidebar__search",
  },
  name: "search",
  placeholder: "Поиск",
});

export const ChatsListComponent = new ChatsList("div", {
  attr: {
    class: "chats-list",
  },
  chats: chats.chats,
});

export default tpl;
