import { EventBus } from "./event-bus";

export class Component {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  private _element: any = null;
  private _meta: any = null;

  private eventBus: () => EventBus;
  private props: any;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName = "div", props = {}) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Component.EVENTS.INIT);
  }

  _registerEvents(eventBus) {
    eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
  }

  _componentDidUpdate(oldProps, newProps) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  setProps = (nextProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();

    this._removeEvents();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    if (this._element !== null) {
      this._element.innerHTML = block;
    }

    this._addEvents();
  }

  // Может переопределять пользователь, необязательно трогать
  render() {
    return "";
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        target[prop] = value;
        self.eventBus().emit(Component.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  _removeEvents() {
    const events = this.props.events;

    if (!events || !this._element) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element.removeEventListener(event, listener);
    });
  }

  _addEvents() {
    const events = this.props.events;

    if (!events) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element.addEventListener(event, listener);
    });
  }

  _createDocumentElement(tagName) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    if (!this._element) {
      return;
    }

    this._element.style.display = "block";
  }

  hide() {
    if (!this._element) {
      return;
    }

    this._element.style.display = "none";
  }
}
