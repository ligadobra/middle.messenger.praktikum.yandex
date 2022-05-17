import Handlebars from "handlebars";
import tpl from "./chat-content-header-avatar.hbs";
import "./chat-content-header-avatar.scss";

Handlebars.registerPartial("chat-content-header-avatar", tpl);

export default (name: string) => {
  tpl({ name });
};
