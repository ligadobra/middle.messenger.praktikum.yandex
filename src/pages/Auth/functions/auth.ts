import { getLoginFormData } from "./get-login-form-data";
import { getRegFormData } from "./get-reg-form-data";

const currentPathname = document.location.pathname;
export const isSignUpPage = () => currentPathname === "/registration";

export function signIn() {
  const formData = getLoginFormData();
  console.log(formData);
}

export function signUp() {
  const formData = getRegFormData();
  console.log(formData);
}
