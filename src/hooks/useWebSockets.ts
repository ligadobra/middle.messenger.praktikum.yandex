import { checkNewMessage } from "../functions/check-messages";
import store from "../services/store";
import { WSModel } from "../services/websockets";

export function useWebSockets(
  id: number,
  chatId: number,
  token: string,
  change?: boolean,
  callback?: () => void
) {
  const instance = WSModel.init(id, chatId, token);

  instance.addEventListener("open", () => {
    instance.send(JSON.stringify({ content: "0", type: "get old" }));
  });

  instance.addEventListener("close", (event) => {
    if (event.wasClean) {
      console.log("Соединение закрыто чисто");
    } else {
      console.log("Обрыв соединения");
    }

    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
  });

  instance.addEventListener("error", (event: any) => {
    console.log("Ошибка", event.message);
  });

  instance.addEventListener("message", (event: any) => {
    if (
      !store.getState().messages?.length ||
      (change && !checkNewMessage(JSON.parse(event.data)))
    ) {
      store.set("messages", JSON.parse(event.data));
      callback?.();
    } else {
      if (checkNewMessage(JSON.parse(event.data))) {
        store.unshift("messages", JSON.parse(event.data));
      }
    }
  });

  return { instance };
}
