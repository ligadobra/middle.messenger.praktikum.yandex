import { Component } from "../../services/component";
import tpl from "./profile";

export default class Profile extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
