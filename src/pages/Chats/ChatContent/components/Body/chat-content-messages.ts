import Handlebars from "handlebars";
import tpl from "./chat-content-messages.hbs";
import { IMessages } from "./chat-content-messages.types";
import "./components/chat-content-message";
import './chat-content-messages.scss';

Handlebars.registerPartial("chat-content-messages", tpl);

export default (messages: IMessages[]) => {
  return tpl({ messages });
};
