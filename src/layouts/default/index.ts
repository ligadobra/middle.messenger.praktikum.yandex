import { Component } from "../../services/component";
import tpl from "./default.layout";

export default class DefaultLayout extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
