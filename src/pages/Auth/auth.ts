import Handlebars from "handlebars";
import { menuCheck } from "./components/Form/form";
import tpl from "./auth.hbs";
import "./components/Form/form";
import './auth.scss';

Handlebars.registerPartial("signIn", tpl);

setTimeout(() => menuCheck(), 100);

export default () => {
  return tpl();
};
