import Button from "../../components/button";
import Link from "../../components/link";
import TextField from "../../components/text-field";
import AvatarSettings from "./components/index";
import { goToRoute } from "../../functions/go-to-route";
import routes from "../../routes";
import store from "../../services/store";
import { editPassword } from "./functions/edit-password-form";
import { editProfile } from "./functions/edit-profile-form";
import tpl from "./profile.hbs";
import { handleAvatar } from "./functions/get-profile-form-data";
import "./profile.scss";

export const nameProfile = new TextField("div", {
  attr: {
    class: "input",
  },
  name: "first_name",
  placeholder: "Ваше имя",
  label: "Имя",
  value: store.getState()?.user?.first_name,
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
    click: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      editProfile();
    },
  },
});

export const passwordButton = new Button("div", {
  attr: {
    class: "button_filled",
  },
  text: "Изменить пароль",
  events: {
    click: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      editPassword();
    },
  },
});

export const LinkComponent = new Link("div", {
  attr: {
    class: "link",
  },
  events: {
    click: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      goToRoute(routes.messenger);
    },
  },
  isBack: true,
  text: "Назад к чату",
});

export const AvatarComponent = new AvatarSettings("div", {
  events: {
    click: (e: MouseEvent) => {
      e.stopPropagation();

      var classes = document.getElementsByClassName("input_avatar");
      var Rate = classes[0];
      (Rate as any).click();
      (Rate as any).addEventListener("change", handleAvatar, false);
    },
  },
});
export default tpl;
