import Button from "../../components/button";
import TextField from "../../components/text-field";
import tpl from "./profile.hbs";
import "./profile.scss";

export const nameProfile = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "first_name",
  placeholder: "Ваше имя",
  label: "Имя",
});

export const secondNameProfile = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "second_name",
  placeholder: "Ваша фамилия",
  label: "Фамилия",
});

export const searchNameProfile = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "display_name",
  placeholder: "Имя в поиске",
  label: "Имя в поиске",
});

export const phoneProfile = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "phone",
  placeholder: "Ваш телефон",
  label: "Телефон",
});

export const emailProfile = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "email",
  placeholder: "Ваш email",
  label: "Email",
});

export const loginProfile = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "login",
  placeholder: "Ваш логин",
  label: "Логин",
});

export const oldPassProfile = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "oldPassword",
  placeholder: "Старый пароль",
  label: "Старый пароль",
});

export const newPassProfile = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "newPassword",
  placeholder: "Новый пароль",
  label: "Новый пароль",
});

export const buttonProfile = new Button("div", {
  attr: {
    class: "button_filled",
  },
  text: "Сохранить",
  events: {
    click: (e) => {
      console.log("Click by save button in Profile");
    },
  },
});

export default tpl;
