import { Component } from "../../services/component";
import tpl from "./text-field";

export default class TextField extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
