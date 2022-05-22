import Handlebars from "handlebars";
import tpl from "./chat-send-form.hbs";
import "./chat-send-form.scss";

Handlebars.registerPartial("chat-send-form", tpl);

export default () => {
  return tpl();
};
