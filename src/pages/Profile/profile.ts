import Button from "../../components/button";
import TextField from "../../components/text-field";
import tpl from "./profile.hbs";
import "./profile.scss";
import { TProfileForm } from "./profile.types";

function getEditProfileFormData() {
  const formData: TProfileForm = {
    login: "",
    oldPassword: "",
    newPassword: "",
    name: "",
    secondName: "",
    searchName: "",
    email: "",
    phone: "",
  };
  const inputs = document
    .getElementsByClassName("profile")[0]
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
    } else if (inputs[i].name === "oldPassword") {
      formData.oldPassword = inputs[i].value;
    } else if (inputs[i].name === "newPassword") {
      formData.newPassword = inputs[i].value;
    } else if (inputs[i].name === "display_name") {
      formData.searchName = inputs[i].value;
    }
  }

  return formData;
}

function editProfile() {
  const formData = getEditProfileFormData();
  console.log(formData);
}

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
    click: (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      editProfile();
    },
  },
});

export default tpl;
