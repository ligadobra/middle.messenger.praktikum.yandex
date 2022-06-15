import { GetUserApi } from "../../../api/auth";
import { ChangeAvatarApi } from "../../../api/users";
import store from "../../../services/store";
import { TAvatar, TUserPassword } from "../../../types/request-data/user";
import { TProfileForm } from "../profile.types";

export function getEditProfileFormData() {
  const formData: TProfileForm = {
    login: "",
    //oldPassword: "",
    //newPassword: "",
    first_name: "",
    second_name: "",
    display_name: "",
    email: "",
    phone: "",
  };
  const inputs = document
    .getElementsByClassName("profile")[0]
    .getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].name === "first_name") {
      formData.first_name = inputs[i].value;
    } else if (inputs[i].name === "phone") {
      formData.phone = inputs[i].value;
    } else if (inputs[i].name === "login") {
      formData.login = inputs[i].value;
    } else if (inputs[i].name === "second_name") {
      formData.second_name = inputs[i].value;
    } else if (inputs[i].name === "email") {
      formData.email = inputs[i].value;
    } else if (inputs[i].name === "display_name") {
      formData.display_name = inputs[i].value;
    }
  }

  return formData;
}

export function getPasswordFormData() {
  const formData: TUserPassword = {
    oldPassword: "",
    newPassword: "",
  };
  const inputs = document
    .getElementsByClassName("profile")[0]
    .getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].name === "newPassword") {
      formData.newPassword = inputs[i].value;
    } else if (inputs[i].name === "oldPassword") {
      formData.oldPassword = inputs[i].value;
    }
  }

  return formData;
}

export function handleAvatar() {
  const formData = new FormData();
  formData.append("avatar", this.files[0]);
  ChangeAvatarApi.create(formData).then((data: any) => {
    store.set("user.avatar", JSON.parse(data.response).avatar);
  });
}
