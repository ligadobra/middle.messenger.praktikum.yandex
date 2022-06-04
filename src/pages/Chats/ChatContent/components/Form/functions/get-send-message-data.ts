import { IChatSendForm } from "../chat-send-form.types";

export function getMessageFormData() {
  const formData: IChatSendForm = { message: "" };
  const inputs = document
    .getElementsByClassName("chat-send-form")[0]
    .getElementsByTagName("input");

  formData.message = inputs[0].value;

  return formData;
}
