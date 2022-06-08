import { currentPath } from "../../../constants/system";
import { executeAllChecks } from "../../../utils/validate";
import { getLoginFormData } from "./get-login-form-data";
import { getRegFormData } from "./get-reg-form-data";

export const isSignUpPage = () => currentPath === "/sign-up";

export function signIn() {
  const formData = getLoginFormData();
  const valuesForCheck = [
    { name: "login", value: formData.login ?? "" },
    { name: "password", value: formData.password ?? "" },
  ];
  console.log(
    executeAllChecks(valuesForCheck)
      ? "Data ready to send!"
      : "Oh no! Maybe form has some errors",
    formData
  );
}

export function signUp() {
  const formData = getRegFormData();
  const valuesForCheck = [
    { name: "login", value: formData.login ?? "" },
    { name: "password", value: formData.password ?? "" },
    { name: "first_name", value: formData.name ?? "" },
    { name: "second_name", value: formData.secondName ?? "" },
    { name: "phone", value: formData.phone ?? "" },
    { name: "email", value: formData.email ?? "" },
  ];
  console.log(
    executeAllChecks(valuesForCheck)
      ? "Data ready to send!"
      : "Oh no! Maybe form has some errors",
    formData
  );
}
