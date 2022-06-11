import tpl from "./auth-up.hbs";
import {
  menuCheck,
  onSignInClick,
  onSignUpClick,
} from "../components/FormUp/form";
import Button from "../../../components/button";
import TextField from "../../../components/text-field";
import AuthFormUp from "../components/FormUp";
import { signUp } from "../functions/auth";
import "./auth-up.scss";

const authButtonUp = new Button("div", {
  text: "Создать аккаунт",
  attr: {
    class: "button",
  },
  events: {
    click: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      signUp();
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

const nameReg = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "first_name",
  placeholder: "Ваше имя",
  label: "Имя",
});

const secondNameReg = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "second_name",
  placeholder: "Ваша фамилия",
  label: "Фамилия",
});

const phoneReg = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "phone",
  placeholder: "Ваш телефон",
  label: "Телефон",
});

const emailReg = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "email",
  placeholder: "Ваш email",
  label: "Email",
});

const loginReg = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "login",
  placeholder: "Ваш логин",
  label: "Логин",
});

const passReg = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "password",
  placeholder: "Ваш пароль",
  label: "Пароль",
});

export const AuthFormComponentUp = new AuthFormUp("div", {
  attr: {
    class: "registration-form",
  },
  authButtonUp,
  nameReg,
  secondNameReg,
  phoneReg,
  emailReg,
  loginReg,
  passReg,
  signInButton,
  signUpButton,
});

setTimeout(() => {
  menuCheck();
}, 100);

export default tpl;
