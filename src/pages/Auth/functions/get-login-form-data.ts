import { TSignIn } from "../AuthIn/auth-in.types";

export function getLoginFormData() {
  const formData: TSignIn = { login: "", password: "" };
  const inputs = document
    .getElementsByClassName("signin")[0]
    .getElementsByTagName("input");

  formData.login = inputs[0].value;
  formData.password = inputs[1].value;

  return formData;
}
