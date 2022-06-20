import tpl from "./chats.hbs";
import ChatContent from "./ChatContent";
import ChatsSidebar from "./ChatsSidebar";
import {
  AddUsersToChatModal,
  ChatBodyComponent,
  ChatContentHeaderComponent,
  ChatFormComponent,
} from "./ChatContent/chat-content";
import {
  ButtonLogoutComponent,
  ChatsListComponent,
  CreateChatButton,
  CreateChatTitle,
  LinkComponent,
  SearchComponent,
} from "./ChatsSidebar/chats-sidebar";
import "./chats.scss";

export const ChatsSidebarComponent = new ChatsSidebar("div", {
  attr: {
    class: "chats-sidebar",
  },
  LinkComponent,
  SearchComponent,
  ChatsListComponent,
  ButtonLogoutComponent,
  CreateChatTitle,
  CreateChatButton,
});

export const ChatContentComponent = new ChatContent("div", {
  attr: {
    class: "chat-content",
  },
  ChatContentHeaderComponent,
  ChatFormComponent,
  ChatBodyComponent,
  AddUsersToChatModal
});

export default tpl;
