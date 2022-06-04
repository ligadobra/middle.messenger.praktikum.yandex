import { Component } from "../../services/component";
import tpl from "./link";

export default class Link extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
