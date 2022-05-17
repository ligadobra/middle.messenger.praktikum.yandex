import tpl from "./separator.hbs";
import Handlebars from "handlebars";
import "./separator.scss";

Handlebars.registerPartial("separator", tpl);

export default () => {
  return tpl();
};
