import { v4 as makeUUID } from "uuid";
import { EventBus } from "../event-bus";

export class Component {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  private _props: any;

  private _children: any;

  private _id: string;

  private _element: any;

  private _meta: any;

  private _eventBus: EventBus;

  constructor(tag = "div", propsAndChilds = {}) {
    const { children, props } = this.getChildren(propsAndChilds);

    this._eventBus = new EventBus();
    this._id = makeUUID();
    this._children = this.makePropsProxy(children);
    this._props = this.makePropsProxy({ ...props, _id: this._id });
    this._meta = { tag, props };

    this.registerEvents();
    this._eventBus.emit(Component.EVENTS.INIT);
  }

  private registerEvents() {
    this._eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
    this._eventBus.on(
      Component.EVENTS.FLOW_CDM,
      this._componentDidMount.bind(this)
    );
    this._eventBus.on(
      Component.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this)
    );
    this._eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  protected init() {
    this._element = this.createDocumentElement(this._meta?.tag);
    this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
  }

  private createDocumentElement(tag: string) {
    const element = document.createElement(tag);
    if (this._props.settings?.WithIntervalID) {
      element.setAttribute("data-id", this._id);
    }

    return element;
  }

  private _render() {
    const block = this.render();
    this.removeEvents();
    this._element.innerHTML = "";
    this._element.appendChild(block);
    this.addEvents();
    this.addAttributes();
  }

  public render() {}

  protected addEvents(e?: string | string[], callback?: () => void) {
    const { events = {} } = this._props;

    if (e?.length && typeof callback === "function") {
      Object.values(e).forEach((eventName) => {
        this._element.addEventListener(eventName, callback);
      });
    }

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  protected removeEvents() {
    const { events = {} } = this._props;

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  protected addAttributes() {
    const { attr = {} } = this._props;

    Object.entries(attr).forEach(([key, value]) => {
      this._element.setAttribute(key, value);
    });
  }

  protected getChildren(propsAndChilds) {
    const children = {};
    const props = {};

    Object.keys(propsAndChilds).forEach((key) => {
      if (propsAndChilds[key] instanceof Component) {
        children[key] = propsAndChilds[key];
      } else {
        props[key] = propsAndChilds[key];
      }
    });

    return { children, props };
  }

  public compile(template: any, props?: object) {
    if (typeof props === "undefined") {
      props = this._props;
    }

    const propsAndStubs = { ...props };

    Object.entries(this._children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${(child as any)._id}"></div>`;
    });

    const fragment = this.createDocumentElement("template");
    fragment.innerHTML = template(propsAndStubs);

    Object.values(this._children).forEach((child) => {
      const stub = (fragment as any).content.querySelector(
        `[data-id="${(child as any)._id}"]`
      );
      if (stub) {
        stub.replaceWith((child as any).getContent());
      }
    });

    return (fragment as any).content;
  }

  private _componentDidMount() {
    this.componentDidMount();
    Object.values(this._children).forEach((child) => {
      (child as any).dispatchComponentDidMount();
    });
  }

  public componentDidMount() {}

  public dispatchComponentDidMount() {
    this._eventBus.emit(Component.EVENTS.FLOW_CDM);
    if (Object.keys(this._children).length) {
      this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
    }
  }

  private _componentDidUpdate(oldProps, newProps) {
    const isReRender = this.componentDidUpdate(oldProps, newProps);
    if (isReRender) {
      this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
    }
  }

  public componentDidUpdate(oldProps, newProps) {
    return true;
  }

  public setProps = (newProps) => {
    if (!newProps) {
      return;
    }

    const { children, props } = this.getChildren(newProps);

    if (Object.values(children).length) {
      Object.assign(this._children, children);
    }

    if (Object.values(props).length) {
      Object.assign(this._props, props);
    }
  };

  private makePropsProxy(props) {
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },

      set: (target, prop, value) => {
        const oldValue = { ...target };
        target[prop] = value;
        this._eventBus.emit(Component.EVENTS.FLOW_CDU, oldValue, target);
        return true;
      },

      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  public getContent() {
    return this._element;
  }

  public show() {
    this.getContent().removeAttribute("style");
  }

  public hide() {
    this.getContent().style.display = "none";
  }
}
