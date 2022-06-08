import { currentPath } from "../constants/system";
import AuthLayout from "../layouts/auth";
import DefaultLayout from "../layouts/default";
import Auth from "../pages/Auth";
import { AuthFormComponent } from "../pages/Auth/auth";
import Chats from "../pages/Chats";
import {
  ChatContentComponent,
  ChatsSidebarComponent,
} from "../pages/Chats/chats";
import Profile from "../pages/Profile";
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
} from "../pages/Profile/profile";

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

export const AuthLayoutComponent = new AuthLayout("div", {
  attr: {
    class: "auth__container",
  },
  AuthPage,
});

export const DefaultLayoutComponent = new DefaultLayout("div", {
  attr: {
    class: "chats-layout",
  },
  ChatsPage,
});