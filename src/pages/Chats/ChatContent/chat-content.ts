import tpl from "./chat-content.hbs";
import { IChat } from "./chat-content.types";
import ChatContentHeader from "./components/Header";
import {
  DropdownChat,
  SeparatorComponent,
} from "./components/Header/chat-content-header";
import ChatContentAvatar from "./components/Header/Avatar";
import ChatContentHamburger from "./components/Header/Hamburger";
import ChatForm from "./components/Form";
import {
  AddAttachmentButton,
  ButtonSend,
  ChatTextField,
} from "./components/Form/chat-send-form";
import ChatBody from "./components/Body";
import { handleChatAvatar } from "./components/Header/Avatar/functions/handle-avatar";
import Modal from "../../../components/modal";
import { CloseComponent } from "../../../components/modal/modal";
import AddUsersToChat from "./components/Header/AddUsers";
import { AddUsersListComponent, AddUsersButtonComponent } from "./components/Header/AddUsers/add-user-to-chat";

const chat: IChat = {
  chatInfo: {
    creator: {
      name: "Igor",
      avatar: "",
    },
    recipient: {
      name: "Василий Теркин",
      avatar: "",
    },
  },
  messages: [
    {
      message: "Привет!",
      time: "18:02",
      isMy: true,
      isRead: false,
    },
    {
      message:
        "В своём изначальном понимании греческий термин «космос» (порядок, мироустройство) имел философскую основу, определяя гипотетический замкнутый вакуум вокруг Земли — центра Вселенной[1]. Тем не менее, в языках на латинской основе и её заимствованиях к одинаковой семантике применяют практический термин «пространство» (так как с научной точки зрения обволакивающий Землю вакуум бесконечен), поэтому в русском и близких ему языках в результате реформенной корректировки родился своеобразный плеоназм «космическое пространство».",
      time: "18:03",
      isMy: false,
      isRead: false,
    },
    {
      message:
        "В своём изначальном понимании греческий термин «космос» (порядок, мироустройство) имел философскую основу, определяя гипотетический замкнутый вакуум вокруг Земли — центра Вселенной[1]. Тем не менее, в языках на латинской основе и её заимствованиях к одинаковой семантике применяют практический термин «пространство» (так как с научной точки зрения обволакивающий Землю вакуум бесконечен), поэтому в русском и близких ему языках в результате реформенной корректировки родился своеобразный плеоназм «космическое пространство».",
      time: "18:03",
      isMy: false,
      isRead: false,
    },
    {
      message:
        "В своём изначальном понимании греческий термин «космос» (порядок, мироустройство) имел философскую основу, определяя гипотетический замкнутый вакуум вокруг Земли — центра Вселенной[1]. Тем не менее, в языках на латинской основе и её заимствованиях к одинаковой семантике применяют практический термин «пространство» (так как с научной точки зрения обволакивающий Землю вакуум бесконечен), поэтому в русском и близких ему языках в результате реформенной корректировки родился своеобразный плеоназм «космическое пространство».",
      time: "18:03",
      isMy: false,
      isRead: false,
    },
  ],
};

export const ChatContentAvatarComponent = new ChatContentAvatar("div", {
  attr: {
    class: "chat-content-header-avatar",
  },
  events: {
    click: (e: MouseEvent) => {
      e.stopPropagation();

      var classes = document.getElementsByClassName(
        "chat-content-header-avatar__input"
      );
      var Rate = classes[0];
      (Rate as any).click();
      (Rate as any).addEventListener("change", handleChatAvatar, false);
    },
  },
});

export const ChatContentHamburgerComponent = new ChatContentHamburger("div", {
  attr: {
    class: "chat-content-header__actions",
  },
  events: {
    click: (e: MouseEvent) => {
      e.stopPropagation();
      document
        .getElementsByClassName("dropdown")[0]
        .classList.add("dropdown-shown");
    },
  },
});

export const ChatContentHeaderComponent = new ChatContentHeader("div", {
  attr: {
    class: "chat-content-header",
  },
  SeparatorComponent,
  DropdownChat,
  ChatContentAvatarComponent,
  ChatContentHamburgerComponent,
});

export const ChatFormComponent = new ChatForm("div", {
  attr: {
    class: "chat-send-form",
  },
  ChatTextField,
  ButtonSend,
  AddAttachmentButton,
});

export const ChatBodyComponent = new ChatBody("div", {
  attr: {
    class: "chat-messages",
  },
  messages: chat.messages,
});

export const AddUsersToChatComponent = new AddUsersToChat("div", {
  attr: {
    class: "add-users-to-chat",
  },
  AddUsersListComponent,
  AddUsersButtonComponent,
});

export const AddUsersToChatModal = new Modal("div", {
  attr: {
    class: "modal add-to-chat-modal",
  },
  CloseComponent,
  ContentModalComponent: AddUsersToChatComponent,
});

export default tpl;
