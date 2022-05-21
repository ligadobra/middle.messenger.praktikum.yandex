import { Component } from "../../services/component";
import tpl from "./link";

export default class Link extends Component {
  render() {
    return this.compile(tpl);
  }
}
