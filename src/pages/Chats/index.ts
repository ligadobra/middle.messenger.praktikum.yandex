import { Component } from "../../services/component/component";
import tpl from "./chats";

class Chats extends Component {
  render(): object {
    return this.compile(tpl);
  }
}

export default Chats;
