import { Component } from "../../../../../services/component/component";
import tpl from "./chat-send-form";

export default class ChatForm extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
