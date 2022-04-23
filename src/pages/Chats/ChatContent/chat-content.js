import Handlebars from "handlebars";
import tpl from "./chat-content.hbs";
import "./components/Header/chat-content-header";
import "./components/Form/chat-send-form";
import "../../../components/text-field/text-field";

Handlebars.registerPartial("chat-content", tpl);

export default () => {
  return tpl();
};
