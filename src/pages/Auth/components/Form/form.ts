import tpl from "./form.hbs";
import "./form.scss";

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

export default tpl;
