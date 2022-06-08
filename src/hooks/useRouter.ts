import { Router } from "../services/router";

export function useRouter(rootQuery: string) {
  const router = new Router(rootQuery);

  return router;
}
