import Handlebars from "handlebars";
import tpl from "./text-field.hbs";
import "./text-field.scss";

Handlebars.registerPartial("textfield", tpl);

export default (label, name, placeholder, value) => {
  return tpl(label, name, placeholder, value);
};
