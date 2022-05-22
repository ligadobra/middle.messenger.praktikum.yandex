import Handlebars from "handlebars";
import { menuCheck } from "./components/Form/form";
import tpl from "./registration.hbs";
import "./components/Form/form";
import './registration.scss';

Handlebars.registerPartial("registration", tpl);

setTimeout(() => menuCheck(), 100);

export default () => {
  return tpl();
};
