import { expect } from "chai";
import { Router } from "./router";
import { JSDOM } from "jsdom";

describe("Router", () => {
  beforeEach(() => {
    const dom = new JSDOM('<div class="app"></div>', {
      url: "http://localhost:3000",
    });
    (global as any).document = dom.window.document;
    (global as any).window = dom.window;
  });

  it("Роутер должен быть синглтоном", () => {
    const router = new Router(".app");

    expect(new Router(".app")).to.eq(router);
  });

  describe(".use", () => {
    it("Должен воззвращаться экземпляр класса Router", () => {
      const router = new Router(".app");

      const result = router.use("/page1", class {});

      expect(result).to.eq(router);
    });
  });

  describe(".go", () => {
    beforeEach(() => {
      class TestComponent {
        getContent() {
          const div = document.createElement("div");
          div.className = "test-app";

          return div;
        }
      }

      const router = new Router(".app");

      router.use("/page1", new TestComponent() as any);

      router.go("/page1");
    });

    it("Должен рендерить новый блок", () => {
      expect(document.getElementsByClassName("test-app")[0]).not.to.be
        .undefined;
    });
    
    it("Должен меняться url", () => {
      expect(window.location.pathname).to.eq("/page1");
    });
  });
});
