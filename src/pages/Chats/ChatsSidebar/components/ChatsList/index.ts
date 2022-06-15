import { Component } from "../../../../../services/component";
import { connect } from "../../../../../services/connect";
import store from "../../../../../services/store";
import tpl from "./chats-list";

class ChatsList extends Component {
  render(): object {
    console.log(store.getState()?.chats);
    return this.compile(tpl);
  }
}

function mapStateToProps(state: any) {
  return { chats: state.chats };
}

export default connect(ChatsList, mapStateToProps);
