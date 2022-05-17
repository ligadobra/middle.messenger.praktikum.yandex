import Handlebars from "handlebars";
import tpl from "./text-field.hbs";
import "./text-field.scss";

Handlebars.registerPartial("textfield", tpl);

export default (
  label: string,
  name: string,
  placeholder: string,
  value: string
) => {
  return tpl({ label, name, placeholder, value });
};
