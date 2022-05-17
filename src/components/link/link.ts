import Handlebars from "handlebars";
import tpl from "./link.hbs";
import "./link.scss";

Handlebars.registerPartial("link", tpl);

export default (text: string, url: string) => {
  tpl({ text, url });
};
