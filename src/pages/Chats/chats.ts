import ChatContent from "./ChatContent";
import tpl from "./chats.hbs";
import "./chats.scss";
import ChatsSidebar from "./ChatsSidebar";
import { ChatsListComponent, LinkComponent, SearchComponent } from "./ChatsSidebar/chats-sidebar";

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
});

export default tpl;
