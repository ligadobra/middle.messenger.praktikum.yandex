import { TSignUp } from "../auth.types";

export function getRegFormData() {
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
