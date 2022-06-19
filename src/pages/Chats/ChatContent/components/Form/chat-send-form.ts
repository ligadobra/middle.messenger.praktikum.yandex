import Button from "../../../../../components/button";
import TextField from "../../../../../components/text-field";
import tpl from "./chat-send-form.hbs";
import "./chat-send-form.scss";
import { SendMessage } from "./functions/send-message";

export const ChatTextField = new TextField("div", {
  attr: {
    class: "chat-send-form__field",
  },
  events: {
    keypress: (e) => {
      if (e && e.keyCode == 13) {
        SendMessage();
      }
    },
  },
  name: "message",
  placeholder: "Ваше сообщение",
});

export const ButtonSend = new Button("img", {
  attr: {
    src: "/svg/send.svg",
  },
  events: {
    click: (e) => {
      SendMessage();
    },
  },
});

export const AddAttachmentButton = new Button("img", {
  attr: {
    src: "/svg/attachment.svg",
  },
  events: {
    click: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const attachmentInput: HTMLElement | null =
        document?.querySelector("#fileInput");
      attachmentInput?.click();
      console.log("Click by attachment button");
    },
  },
});

export default tpl;
