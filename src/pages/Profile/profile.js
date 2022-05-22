import tpl from "./profile.hbs";
import Handlebars from "handlebars";
import "./profile.scss";

Handlebars.registerPartial("profile", tpl);

export default () => {
  return tpl();
};
