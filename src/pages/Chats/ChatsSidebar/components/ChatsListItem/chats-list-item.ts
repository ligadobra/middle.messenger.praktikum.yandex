import Handlebars from "handlebars";
import tpl from "./chats-list-item.hbs";
import "../../../../../components/avatar/avatar";
import "./chats-list-item.scss";

Handlebars.registerPartial("chats-list-item", tpl);

export default (name: string, text: string, time: string, unread: boolean) => {
  tpl({name, text, time, unread});
};
