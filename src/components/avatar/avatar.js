import tpl from "./avatar.hbs";
import Handlebars from "handlebars";
import './avatar.scss';

Handlebars.registerPartial("avatar", tpl);

export default () => {
  return tpl();
};
