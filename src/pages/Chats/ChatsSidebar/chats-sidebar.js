import Handlebars from "handlebars";
import tpl from "./chats-sidebar.hbs";
import "../../../components/link/link";
import "../../../components/text-field/text-field";
import "./components/ChatsList/chats-list";
import "./chats-sidebar.scss";

Handlebars.registerPartial("chats-sidebar", tpl);

export default () => {
  return tpl();
};
