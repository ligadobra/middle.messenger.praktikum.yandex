import AuthLayout from "./layouts/auth";
import DefaultLayout from "./layouts/default";
import Auth from "./pages/Auth";
import { AuthFormComponent } from "./pages/Auth/auth";
import Chats from "./pages/Chats";
import {
  ChatContentComponent,
  ChatsSidebarComponent,
} from "./pages/Chats/chats";
import render from "./utils/render";

const appStore = {
  token: "123",
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

const ChatsPage = new Chats("div", {
  attr: {
    class: "chats",
  },
  ChatsSidebarComponent,
  ChatContentComponent,
});

const AuthLayoutComponent = new AuthLayout("div", {
  attr: {
    class: "auth__container",
  },
  AuthPage,
});

const DefaultLayoutComponent = new DefaultLayout("div", {
  attr: {
    class: "chats-layout",
  },
  ChatsPage,
});

render(".app", !appStore.token ? AuthLayoutComponent : DefaultLayoutComponent);
