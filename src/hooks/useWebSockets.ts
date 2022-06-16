import store from "../services/store";
import { WSModel } from "../services/websockets";

export function useWebSockets(id: number, chatId: number, token: string) {
  const instance = WSModel.init(id, chatId, token);

  instance.addEventListener("open", () => {
    console.log("Соединение установлено");

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
    console.log("Получены новые дланные", event.data);
    if (Array.isArray(JSON.parse(event.data))) {
      console.log("tuta");
      store.set("messages", JSON.parse(event.data));
    }
  });

  return { instance };
}

export function getMessages(
  instance: WebSocket,
  callback: (event: any) => void
) {
  instance.addEventListener("message", callback);
}
