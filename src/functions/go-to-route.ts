import { Router } from "../services/router/router";

export function goToRoute(url) {
  const route = new Router(".app");

  route.go(url);
}
