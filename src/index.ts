import { useRouter } from "./hooks/useRouter";
import {
  AuthLayoutComponentIn,
  AuthLayoutComponentUp,
  DefaultLayoutComponent,
} from "./layouts/create-layouts";
import routes from "./routes";

const router = useRouter(".app");

router
  .use(routes.home, AuthLayoutComponentIn)
  .use(routes.signup, AuthLayoutComponentUp)
  .use(routes.messenger, DefaultLayoutComponent)
  .use(routes.settings, DefaultLayoutComponent)
  .start();
