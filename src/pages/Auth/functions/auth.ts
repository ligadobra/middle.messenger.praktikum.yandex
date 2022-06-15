import { GetUserApi, SignInApi, SignUpApi } from "../../../api/auth";
import { GetChatsApi } from "../../../api/chats";
import { goToRoute } from "../../../functions/go-to-route";
import routes from "../../../routes";
import store from "../../../services/store";
import { executeAllChecks } from "../../../utils/validate";
import { getLoginFormData } from "./get-login-form-data";
import { getRegFormData } from "./get-reg-form-data";

export function signIn() {
  const formData = getLoginFormData();
  const valuesForCheck = [
    { name: "login", value: formData.login ?? "" },
    { name: "password", value: formData.password ?? "" },
  ];

  if (!executeAllChecks(valuesForCheck)) {
    return;
  }

  SignInApi.create({
    login: formData.login,
    password: formData.password,
  }).then(() => {
    GetUserApi.create().then((data: any) => {
      store.set("user", JSON.parse(data.user.response));
      GetChatsApi.create().then((data: any) => {
        goToRoute(routes.messenger);
      });
    });
  });
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

  if (!executeAllChecks(valuesForCheck)) {
    return;
  }

  SignUpApi.create({
    first_name: formData.name,
    second_name: formData.secondName,
    login: formData.login,
    email: formData.email,
    password: formData.password,
    phone: formData.phone,
  }).then(() => {
    GetUserApi.create().then((data: any) => {
      store.set("user", JSON.parse(data.user.response));
      GetChatsApi.create().then((data: any) => {
        goToRoute(routes.messenger);
      });
    });
  });
}
