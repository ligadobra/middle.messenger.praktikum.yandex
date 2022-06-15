import { currentPath } from "../constants/system";
import AuthLayout from "../layouts/auth";
import DefaultLayout from "../layouts/default";
import AuthIn from "../pages/Auth/AuthIn";
import { AuthFormComponentIn } from "../pages/Auth/AuthIn/auth-in";
import AuthUp from "../pages/Auth/AuthUp";
import { AuthFormComponentUp } from "../pages/Auth/AuthUp/auth-up";
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
  LinkComponent,
  passwordButton,
  AvatarComponent,
} from "../pages/Profile/profile";

const AuthPageIn = new AuthIn("div", {
  attr: {
    class: "auth",
  },
  AuthForm: AuthFormComponentIn,
});

const AuthPageUp = new AuthUp("div", {
  attr: {
    class: "auth",
  },
  AuthForm: AuthFormComponentUp,
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
  passwordButton,
  LinkComponent,
  AvatarComponent,
});

const ChatsPage = new Chats("div", {
  attr: {
    class: "chats",
  },
  isChat: currentPath === "/profile" ? false : true,
  ChatsSidebarComponent,
  ChatContentComponent,
});

export const AuthLayoutComponentIn = new AuthLayout("div", {
  attr: {
    class: "auth__container",
  },
  AuthPageIn,
  isAuthIn: true,
});

export const AuthLayoutComponentUp = new AuthLayout("div", {
  attr: {
    class: "auth__container",
  },
  AuthPageUp,
  isAuthIn: false,
});

export const DefaultLayoutComponent = new DefaultLayout("div", {
  attr: {
    class: "chats-layout",
  },
  ChatsPage,
});
