import Close from "./close";
import tpl from "./modal.hbs";
import "./modal.scss";

export const CloseComponent = new Close("div", {
  attr: {
    class: "close",
  },
  events: {
    click: (event) => {
      event.preventDefault();
      event.stopPropagation();
      document
        .getElementsByClassName("add-to-chat-modal")[0]
        .classList.remove("modal-shown");
      document
        .getElementsByClassName("dropdown")[0]
        .classList.remove("dropdown-shown");
    },
  },
});

export default tpl;
