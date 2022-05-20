import { Component } from "../../services/component";
import tpl from "./auth";

export default class Auth extends Component {
  render(): string {
    return this.compile(tpl);
  }
}
