import { mediaPath } from "../../../constants/system";
import { Component } from "../../../services/component";
import { connect } from "../../../services/connect";
import tpl from "./avatar";

class AvatarSettings extends Component {
  render(): object {
    return this.compile(tpl);
  }
}

function mapStateToProps(state: any) {
  return {
    src: state?.user?.avatar ? mediaPath + state?.user?.avatar : undefined,
  };
}

export default connect(AvatarSettings, mapStateToProps);
