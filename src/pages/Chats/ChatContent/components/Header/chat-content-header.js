import Handlebars from "handlebars";
import tpl from "./chat-content-header.hbs";
import "./Avatar/chat-content-header-avatar";
import "../../../../../components/separator/separator";
import "./chat-content-header.scss";

export const name = { name: "Артур Пингвинов" };

Handlebars.registerPartial("chat-content-header", tpl(name));

export default () => {
  tpl();
};
