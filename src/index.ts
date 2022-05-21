import AuthLayout from "./layouts/auth";
import DefaultLayout from "./layouts/default";
import Auth from "./pages/Auth";
import { AuthFormComponent } from "./pages/Auth/auth";
import render from "./utils/render";

const appStore = {
  token: "",
};

function setToken() {
  appStore.token = "123";
}

const AuthPage = new Auth("div", {
  attr: {
    class: "auth",
  },
  AuthForm: AuthFormComponent,
});

const AuthLayoutComponent = new AuthLayout("div", {
  attr: {
    class: "auth__container",
  },
  AuthPage: AuthPage,
});

const DefaultLayoutComponent = new DefaultLayout("div", {
  attr: {
    class: "chats-layout",
  },
});

render(".app", !appStore.token ? AuthLayoutComponent : DefaultLayoutComponent);
