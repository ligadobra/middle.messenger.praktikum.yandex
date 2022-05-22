import tpl from "./chat-content-header.hbs";
import Separator from "../../../../../components/separator";
import ChatContentAvatar from "./Avatar";
import "./chat-content-header.scss";

export const name = { name: "Артур Пингвинов" };

export const SeparatorComponent = new Separator("div", {
  attr: {
    class: "separator",
  },
});

export default tpl;
