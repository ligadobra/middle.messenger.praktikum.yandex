import { Component } from "../../services/component";
import tpl from "./avatar";

export default class Avatar extends Component {
  render() {
    return this.compile(tpl);
  }
}
