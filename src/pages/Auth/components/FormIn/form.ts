import { Router } from "../../../../services/router";
import tpl from "./form.hbs";
import "./form.scss";

const route = new Router(".app");
export function menuCheck() {
  const signin = document.getElementById("signin");
  const registration = document.getElementById("registration");

  if (window.location.pathname === "/") {
    signin?.classList?.add("signin-active-link");
    registration?.classList?.remove("signin-active-link");
  }
  if (window.location.pathname === "/sign-up") {
    registration?.classList?.add("signin-active-link");
    signin?.classList?.remove("signin-active-link");
  }
}

export function onSignInClick() {
  route.go("/");
}

export function onSignUpClick() {
  route.go("/sign-up");
}

export default tpl;
