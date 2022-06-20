import { mediaPath } from "../../../../../../constants/system";
import { Component } from "../../../../../../services/component/component";
import { connect } from "../../../../../../services/connect";
import tpl from "./chat-content-header-avatar";

class ChatContentAvatar extends Component {
  render(): object {
    return this.compile(tpl);
  }
}

function mapStateToProps(state) {
  return {
    title: state.currentChat?.title,
    avatar: state.currentChat?.avatar
      ? mediaPath + state.currentChat?.avatar
      : undefined,
  };
}

export default connect(ChatContentAvatar, mapStateToProps);
