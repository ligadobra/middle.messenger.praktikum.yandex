import tpl from "./auth.hbs";
import {
  menuCheck,
  onSignInClick,
  onSignUpClick,
} from "./components/Form/form";
import Button from "../../components/button";
import TextField from "../../components/text-field";
import AuthForm from "./components/Form";
import { signUp, signIn, isSignUpPage } from "./functions/auth";
import "./auth.scss";

const authButton = new Button("div", {
  text: !isSignUpPage() ? "Войти" : "Создать аккаунт",
  attr: {
    class: "button",
  },
  events: {
    click: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      isSignUpPage() ? signUp() : signIn();
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

export const AuthFormComponent = new AuthForm("div", {
  attr: {
    class: !isSignUpPage() ? "signin" : "registration-form",
  },
  isSignUpPage: !isSignUpPage() ? false : true,
  authButton,
  textfieldLogin,
  passfieldLogin,
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
