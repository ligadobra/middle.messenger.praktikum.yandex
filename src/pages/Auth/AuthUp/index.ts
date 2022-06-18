import { Component } from "../../../services/component/component";
import tpl from "./auth-up";

export default class AuthUp extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
