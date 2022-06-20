import { currentPath } from "./constants/system";
import { UserController } from "./controllers/user-controller";
import { goToRoute } from "./functions/go-to-route";
import { useRouter } from "./hooks/useRouter";
import {
  AuthLayoutComponentIn,
  AuthLayoutComponentUp,
  DefaultLayoutComponent,
  ProfileComponent,
} from "./layouts/create-layouts";
import routes from "./routes";
import { initChats } from "./controllers/init-controller";
import "./services/handlebars-helpers";
import { checkMenuClick } from "./functions/check-menu-click";

const router = useRouter(".app");

router
  .use(routes.home, AuthLayoutComponentIn)
  .use(routes.signup, AuthLayoutComponentUp)
  .use(routes.messenger, DefaultLayoutComponent)
  .use(routes.settings, ProfileComponent)
  .start();

UserController.getUser().catch(() => {
  goToRoute(routes.home);
});

if (currentPath === routes.messenger) {
  initChats();
  setTimeout(() => {
    checkMenuClick();
  }, 2000);
}
