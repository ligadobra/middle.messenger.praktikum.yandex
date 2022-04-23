import Handlebars from "handlebars";
import tpl from "./chats-list-item.hbs";
import "../../../../../components/avatar/avatar";
import "./chats-list-item.scss";

Handlebars.registerPartial("chats-list-item", tpl);

export default (name, text, time, unread) => {
  tpl({ name, text, time, unread });
};
