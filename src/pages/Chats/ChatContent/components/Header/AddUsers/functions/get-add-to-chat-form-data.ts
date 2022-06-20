export function getAddToChatListFormData() {
  const formData: { list: string } = {
    list: "",
  };
  const inputs = document
    .getElementsByClassName("chat-content")[0]
    .getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].name === "add-to-chat-list") {
      formData.list = inputs[i].value;
    }
  }

  return formData;
}
