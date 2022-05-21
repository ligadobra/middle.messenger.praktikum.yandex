import { Component } from "../../services/component";
import tpl from "./text-field";

export default class TextField extends Component {
  render() {
    return this.compile(tpl);
  }
}
