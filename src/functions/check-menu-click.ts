import { menuClick } from "./menu-click";

export function checkMenuClick() {
  const list = document.querySelectorAll(".chat-list-item");

  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", () => {
      menuClick(i);
    });
  }
}
