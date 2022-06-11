import routes from "../../../routes";
import { Router } from "../../../services/router";

const route = new Router(".app");

function menuCheck(path: string) {
  const signin = document.querySelectorAll("#signin");
  const registration = document.querySelectorAll("#registration");
  console.log(signin, registration, path);
  if (path === routes.home) {
    signin.forEach((item) => item.classList?.add("signin-active-link"));
    registration.forEach((item) =>
      item.classList?.remove("registration-form-active-link")
    );
  }
  if (path === routes.signup) {
    signin.forEach((item) => item.classList?.remove("signin-active-link"));
    registration.forEach((item) =>
      item.classList?.add("registration-form-active-link")
    );
  }
}

export function onSignInClick() {
  route.go(routes.home);
  menuCheck(routes.home);
}

export function onSignUpClick() {
  route.go(routes.signup);
  menuCheck(routes.signup);
}
