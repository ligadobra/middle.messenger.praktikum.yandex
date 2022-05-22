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

    this.checkField(this.getChildren(props).props[1].name);
  }

  private checkField(elementName: string) {
    switch (elementName) {
      case "login":
        this.addEvents(["focusin", "focusout"], checkLogin);
      case "password":
        this.addEvents(["focusin", "focusout"], checkPassword);
      case "first_name":
        this.addEvents(["focusin", "focusout"], checkName);
      case "second_name":
        this.addEvents(["focusin", "focusout"], checkName);
      case "phone":
        this.addEvents(["focusin", "focusout"], checkPhone);
      case "email":
        this.addEvents(["focusin", "focusout"], checkEmail);
      case "message":
        this.addEvents(["focusin", "focusout"], checkMessage);
    }
  }

  render(): object {
    return this.compile(tpl);
  }
}
