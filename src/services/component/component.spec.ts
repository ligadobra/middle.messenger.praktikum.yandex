import { expect } from "chai";
import { Component } from "./component";
import { JSDOM } from "jsdom";

describe("Проверяем сервис компонента", () => {
  beforeEach(() => {
    const dom = new JSDOM('<div class="app"></div>', {
      url: "http://localhost:3000",
    });
    (global as any).document = dom.window.document;
    (global as any).window = dom.window;
  });

  class Test extends Component {
    public render() {
      return this.compile(() => {
        return "<div class='app-testik'></div>";
      });
    }
  }

  it("Проверяем создание блока", () => {
    expect(new Test("nav").getContent().tagName).to.equal("NAV");
  });

  it("Проверяем добавление в него чилда", () => {
    expect(new Test("nav").getContent().children[0].className).to.equal(
      "app-testik"
    );
  });

  it(".addAttributes", () => {
    expect(
      new Test("nav", {
        attr: {
          class: "app-test",
        },
      }).getContent().className
    ).to.equal("app-test");
  });

  it(".addEvents", () => {
    let a: string = "";
    new Test("nav", {
      events: {
        click: () => {
          a = "123";
        },
      },
    })
      .getContent()
      .click();

    expect(a).to.equal("123");
  });
});
