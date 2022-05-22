import { TProfileForm } from "../profile.types";

export function getEditProfileFormData() {
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
