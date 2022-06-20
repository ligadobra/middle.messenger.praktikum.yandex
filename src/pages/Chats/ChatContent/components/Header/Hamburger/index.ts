import { Component } from "../../../../../../services/component/component";
import { connect } from "../../../../../../services/connect";
import tpl from "./chat-content-header-hamburger";

class ChatContentHamburger extends Component {
  render(): object {
    return this.compile(tpl);
  }
}

export default ChatContentHamburger;
