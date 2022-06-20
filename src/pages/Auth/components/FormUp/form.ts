import { Router } from "../../../../services/router/router";
import tpl from "./form.hbs";
import "./form.scss";

const route = new Router(".app");

export function onSignInClick() {
  route.go("/");
}

export function onSignUpClick() {
  route.go("/sign-up");
}

export default tpl;
