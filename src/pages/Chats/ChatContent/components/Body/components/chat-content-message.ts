import Handlebars from "handlebars";
import tpl from "./chat-content-message.hbs";
import './chat-content-message.scss';

Handlebars.registerPartial("chat-content-message", tpl);

export default (
  message: string,
  time: string,
  isRead: boolean,
  isMy: boolean
) => {
  return tpl({ message: message, time: time, isRead: isRead, isMy: isMy });
};
