import { Component } from "../../../../services/component";
import tpl from "./form";

export default class AuthForm extends Component {
  render() {
    return this.compile(tpl);
  }
}
