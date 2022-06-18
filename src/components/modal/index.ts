import { Component } from "../../services/component/component";
import tpl from "./modal";

export default class Modal extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
