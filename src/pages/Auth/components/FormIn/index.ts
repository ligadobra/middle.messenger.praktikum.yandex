import { Component } from "../../../../services/component";
import tpl from "./form";

export default class AuthFormIn extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
