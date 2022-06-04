import tpl from "./chats.hbs";
import ChatContent from "./ChatContent";
import ChatsSidebar from "./ChatsSidebar";
import { ChatBodyComponent, ChatContentHeaderComponent, ChatFormComponent } from "./ChatContent/chat-content";
import { ChatsListComponent, LinkComponent, SearchComponent } from "./ChatsSidebar/chats-sidebar";
import "./chats.scss";

export const ChatsSidebarComponent = new ChatsSidebar("div", {
  attr: {
    class: "chats-sidebar",
  },
  LinkComponent,
  SearchComponent,
  ChatsListComponent
});

export const ChatContentComponent = new ChatContent("div", {
  attr: {
    class: "chat-content",
  },
  ChatContentHeaderComponent,
  ChatFormComponent,
  ChatBodyComponent,
});

export default tpl;
