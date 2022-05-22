import Handlebars from "handlebars";
import { menuCheck } from "./components/Form/form";
import tpl from "./auth.hbs";
import "./components/Form/form";
import "./auth.scss";
import Button from "../../components/button";
import TextField from "../../components/text-field";
import AuthForm from "./components/Form";
import { TSignIn, TSignUp } from "./auth.types";

Handlebars.registerPartial("signIn", tpl);

const currentPathname = document.location.pathname;
const isSignUpPage = () => currentPathname === "/registration";

function getLoginFormData() {
  const formData: TSignIn = { login: "", password: "" };
  const inputs = document
    .getElementsByClassName("signin")[0]
    .getElementsByTagName("input");

  formData.login = inputs[0].value;
  formData.password = inputs[1].value;

  return formData;
}

function getRegFormData() {
  const formData: TSignUp = {
    login: "",
    password: "",
    name: "",
    secondName: "",
    email: "",
    phone: "",
  };
  const inputs = document
    .getElementsByClassName("registration-form")[0]
    .getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].name === "first_name") {
      formData.name = inputs[i].value;
    } else if (inputs[i].name === "phone") {
      formData.phone = inputs[i].value;
    } else if (inputs[i].name === "login") {
      formData.login = inputs[i].value;
    } else if (inputs[i].name === "second_name") {
      formData.secondName = inputs[i].value;
    } else if (inputs[i].name === "email") {
      formData.email = inputs[i].value;
    } else if (inputs[i].name === "password") {
      formData.password = inputs[i].value;
    }
  }

  return formData;
}

function signIn() {
  const formData = getLoginFormData();
  console.log(formData);
}

function signUp() {
  const formData = getRegFormData();
  console.log(formData);
}

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
});

setTimeout(() => menuCheck(), 100);

export default tpl;
