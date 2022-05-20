import { Component } from "../../services/component";
import tpl from "./button"; 

export default class Button extends Component {
  render(): string {
    return this.compile(tpl);
  }

  addEvents() {
    const element = this.getContent();
    element.addEventListener("click", (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      console.log(e.target, "click");
    });

    super.addEvents();
  }
}
