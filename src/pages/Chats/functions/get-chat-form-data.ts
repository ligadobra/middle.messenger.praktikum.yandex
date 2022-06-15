export function getCreateChatFormData() {
  const formData: { title: string } = {
    title: "",
  };
  const inputs = document
    .getElementsByClassName("chats-sidebar")[0]
    .getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].name === "chat-title") {
      formData.title = inputs[i].value;
    }
  }

  return formData;
}
