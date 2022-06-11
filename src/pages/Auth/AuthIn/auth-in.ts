import tpl from "./auth-in.hbs";
import {
  menuCheck,
  onSignInClick,
  onSignUpClick,
} from "../components/FormIn/form";
import Button from "../../../components/button";
import TextField from "../../../components/text-field";
import AuthFormIn from "../components/FormIn";
import { signIn } from "../functions/auth";
import "./auth-in.scss";

const authButtonIn = new Button("div", {
  text: "Войти",
  attr: {
    class: "button",
  },
  events: {
    click: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      signIn();
    },
  },
});

const signInButton = new Button("div", {
  text: "Вход",
  attr: {
    class: "signin-link",
    id: "signin",
  },
  events: {
    click: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onSignInClick();
    },
  },
});

const signUpButton = new Button("div", {
  text: "Регистрация",
  attr: {
    class: "signin-link",
    id: "registration",
  },
  events: {
    click: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onSignUpClick();
    },
  },
});

const textfieldLogin = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "login",
  placeholder: "Ваш логин",
  label: "Логин",
});

const passfieldLogin = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "password",
  placeholder: "Ваш пароль",
  label: "Пароль",
});

export const AuthFormComponentIn = new AuthFormIn("div", {
  attr: {
    class: "signin",
  },
  authButtonIn,
  textfieldLogin,
  passfieldLogin,
  signInButton,
  signUpButton,
});

setTimeout(() => {
  menuCheck();
}, 100);

export default tpl;
