// import defaultLayout from "./layouts/default/default.layout";
// import authLayout from "./layouts/auth/auth.layout";
// import signIn from "./pages/Auth/auth";
// import registration from "./pages/Registration/registration";
// import chat from "./pages/Chats/ChatContent/chat-content";
// import profile from "./pages/Profile/profile";

import Button from "./components/button";
import AuthLayout from "./layouts/auth";
import DefaultLayout from "./layouts/default";
import Auth from "./pages/Auth";
import render from "./utils/render";

// const pathName = window.location.pathname;

// if (pathName === "/auth" || pathName === "/registration") {
//   document.body.innerHTML = authLayout();
//   if (pathName === "/auth") {
//     document.querySelector(".auth__container")!.innerHTML = signIn();
//   } else if (pathName === "/registration") {
//     document.querySelector(".auth__container")!.innerHTML = registration();
//   }
// } else if (pathName === "/chats" || pathName === "/profile") {
//   document.body.innerHTML = defaultLayout();
//   if (pathName === "/chats") {
//     document.querySelector(".chats-layout__content")!.innerHTML = chat();
//   } else if (pathName === "/profile") {
//     document.querySelector(".chats-layout__content")!.innerHTML = profile();
//   }
// } else {
// }

const token = "123";

// const button = new Button("div", {
//   text: "Igor",
//   attr: {
//     class: "button",
//   },
// });

const AuthPage = new Auth("div", {
  attr: {
    class: "auth",
  },
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

render(".app", !token ? AuthLayoutComponent : DefaultLayoutComponent);
