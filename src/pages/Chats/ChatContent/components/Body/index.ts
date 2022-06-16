import { Component } from "../../../../../services/component";
import { connect } from "../../../../../services/connect";
import store from "../../../../../services/store";
import tpl from "./chat-content-messages";

class ChatBody extends Component {
  render(): object {
    return this.compile(tpl);
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    myId: store.getState()?.user?.id,
  };
}

export default connect(ChatBody, mapStateToProps);
