import { Component } from "../../services/component/component";
import tpl from "./dropdown";

export default class Dropdown extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
