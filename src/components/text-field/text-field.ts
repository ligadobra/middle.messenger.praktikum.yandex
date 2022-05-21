import Handlebars from "handlebars";
import tpl from "./text-field.hbs";
import "./text-field.scss";

Handlebars.registerPartial("textfield", tpl);

export default tpl;
