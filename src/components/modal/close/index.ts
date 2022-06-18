import { Component } from "../../../services/component/component";
import tpl from "./close";

export default class Close extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
