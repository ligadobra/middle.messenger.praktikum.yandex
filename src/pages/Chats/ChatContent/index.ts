import { Component } from "../../../services/component/component";
import { connect } from "../../../services/connect";
import tpl from "./chat-content";

class ChatContent extends Component {
  render(): object {
    return this.compile(tpl);
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentChat: state.currentChat,
  };
}

export default connect(ChatContent, mapStateToProps);
