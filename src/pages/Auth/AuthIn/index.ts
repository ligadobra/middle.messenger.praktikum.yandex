import { Component } from "../../../services/component/component";
import tpl from "./auth-in";

export default class AuthIn extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
