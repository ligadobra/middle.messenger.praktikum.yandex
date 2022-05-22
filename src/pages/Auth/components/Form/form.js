import Handlebars from "handlebars";
import tpl from "./form.hbs";
import "../../../../components/button/button";
import '../../../../components/text-field/text-field';
import "./form.scss";

Handlebars.registerPartial("signin-form", tpl);

export function menuCheck() {
  const signin = document.getElementById("signin");
  const registration = document.getElementById("registration");

  if (window.location.pathname == "/auth") {
    signin?.classList?.add("signin-active-link");
    registration?.classList?.remove("signin-active-link");
  }
  if (window.location.pathname == "/registration") {
    registration?.classList?.add("signin-active-link");
    signin?.classList?.remove("signin-active-link");
  }
}

export default () => {
  return tpl();
};
