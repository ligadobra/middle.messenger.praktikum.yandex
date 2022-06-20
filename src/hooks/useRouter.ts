import { Router } from "../services/router/router";

export function useRouter(rootQuery: string) {
  const router = new Router(rootQuery);

  return router;
}
