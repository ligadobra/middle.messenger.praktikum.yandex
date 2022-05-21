import { Component } from "../../services/component";
import tpl from "./button"; 

export default class Button extends Component {
  render(): string {
    return this.compile(tpl);
  }

  addEvents() {
    super.addEvents();
  }
}
