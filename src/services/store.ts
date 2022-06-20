import { Indexed } from "../types/indexed";
import set from "../utils/set";
import { EventBus } from "./event-bus";

export enum StoreEvents {
  Updated = "updated",
}

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    if (!this.listeners[StoreEvents.Updated]) {
      return;
    }

    this.emit(StoreEvents.Updated);
  }

  public unshift(path: string, value: unknown) {
    this.state[path].unshift(value);

    if (!this.listeners[StoreEvents.Updated]) {
      return;
    }

    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
