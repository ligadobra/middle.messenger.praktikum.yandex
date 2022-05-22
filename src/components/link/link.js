import Handlebars from "handlebars";
import tpl from "./link.hbs";
import "./link.scss";

Handlebars.registerPartial("link", tpl);

export default (text, url) => {
  tpl({ text, url });
};
