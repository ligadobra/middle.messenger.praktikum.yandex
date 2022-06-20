import { expect } from "chai";
import "jsdom-global/register";
import {
  DeleteTest,
  GetTest,
  PostTest,
  PutTest,
} from "../../api/tests/requests";
import { queryStringify } from "./fetch";

describe("Проверяем Модуль отправки запросов", () => {
  describe("Проверяем функцию преобразования параметров к строке для GET запроса", () => {
    it("Проверяем метод queryStringify", () => {
      expect(
        queryStringify({ title: "1", description: 5, avatar: "/src/1" })
      ).to.equal("?title=1&description=5&avatar=/src/1");
    });
  });

  describe("Проверяем методы get, post, put, delete", async () => {
    it("Проверяем метод GET", async () => {
      const data: any = await GetTest.create();
      expect(data.status === 200).to.equal(true);
    });

    it("Проверяем метод POST", async () => {
      const data: any = await PostTest.create();
      expect(data.status === 200).to.equal(true);
    });

    it("Проверяем метод PUT", async () => {
      const data: any = await PutTest.create();
      expect(data.status === 200).to.equal(true);
    });

    it("Проверяем метод DELETE", async () => {
      const data: any = await DeleteTest.create();
      expect(data.status === 200).to.equal(true);
    });
  });
});