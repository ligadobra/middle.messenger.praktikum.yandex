import { Component } from "../../services/component/component";
import tpl from "./avatar";

export default class Avatar extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
