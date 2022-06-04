import { Component } from "../../services/component";
import {
  checkEmail,
  checkLogin,
  checkMessage,
  checkName,
  checkPassword,
  checkPhone,
} from "../../utils/validate";
import tpl from "./text-field";

export default class TextField extends Component {
  constructor(...props) {
    super(...props);
    this.checkField(this.getContent().getElementsByTagName("input")[0].name);
  }

  private checkField(elementName: string) {
    switch (elementName) {
      case "login":
        this.addEvents(["focusin", "focusout"], checkLogin);
        break;
      case "password":
        this.addEvents(["focusin", "focusout"], checkPassword);
        break;
      case "first_name":
        this.addEvents(["focusin", "focusout"], checkName);
        break;
      case "second_name":
        this.addEvents(["focusin", "focusout"], checkName);
        break;
      case "phone":
        this.addEvents(["focusin", "focusout"], checkPhone);
        break;
      case "email":
        this.addEvents(["focusin", "focusout"], checkEmail);
        break;
      case "message":
        this.addEvents(["focusin", "focusout"], checkMessage);
        break;
    }
  }

  render(): object {
    return this.compile(tpl);
  }
}
