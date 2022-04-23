import defaultLayout from "./layouts/default/default.layout.js";
import authLayout from "./layouts/auth/auth.layout.js";
import signIn from "./pages/Auth/auth";
import registration from "./pages/Registration/registration";
import chat from "./pages/Chats/ChatContent/chat-content";
import profile from "./pages/Profile/profile";

const pathName = window.location.pathname;

if (pathName === "/auth" || pathName === "/registration") {
  document.body.innerHTML = authLayout();
  if (pathName === "/auth") {
    document.querySelector(".auth__container").innerHTML = signIn();
  } else if (pathName === "/registration") {
    document.querySelector(".auth__container").innerHTML = registration();
  }
} else if (pathName === "/chats" || pathName === "/profile") {
  document.body.innerHTML = defaultLayout();
  if (pathName === "/chats") {
    document.querySelector(".chats-layout__content").innerHTML = chat();
  } else if (pathName === "/profile") {
    document.querySelector(".chats-layout__content").innerHTML = profile();
  }
} else {
}
