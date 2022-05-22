import AuthLayout from "./layouts/auth";
import DefaultLayout from "./layouts/default";
import Auth from "./pages/Auth";
import { AuthFormComponent } from "./pages/Auth/auth";
import Chats from "./pages/Chats";
import {
  ChatContentComponent,
  ChatsSidebarComponent,
} from "./pages/Chats/chats";
import Profile from "./pages/Profile";
import {
  nameProfile,
  secondNameProfile,
  searchNameProfile,
  phoneProfile,
  emailProfile,
  loginProfile,
  oldPassProfile,
  newPassProfile,
  buttonProfile,
} from "./pages/Profile/profile";
import render from "./utils/render";

const appStore = {
  token: "",
};
const currentPath = document.location.pathname;

function setToken() {
  appStore.token = "123";
}

const AuthPage = new Auth("div", {
  attr: {
    class: "auth",
  },
  AuthForm: AuthFormComponent,
});

export const ProfileComponent = new Profile("div", {
  attr: {
    class: "profile",
  },
  nameProfile,
  secondNameProfile,
  searchNameProfile,
  phoneProfile,
  emailProfile,
  loginProfile,
  oldPassProfile,
  newPassProfile,
  buttonProfile,
});

const ChatsPage = new Chats("div", {
  attr: {
    class: "chats",
  },
  isChat: currentPath === "/profile" ? false : true,
  ChatsSidebarComponent,
  ChatContentComponent,
  ProfileComponent,
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
