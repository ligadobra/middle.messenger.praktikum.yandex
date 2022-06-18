import { Component } from "../../../../services/component/component";
import tpl from "./form";

export default class AuthFormUp extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
