import { useRouter } from "./hooks/useRouter";
import {
  AuthLayoutComponentIn,
  AuthLayoutComponentUp,
  DefaultLayoutComponent,
} from "./layouts/create-layouts";

const router = useRouter(".app");

router
  .use("/", AuthLayoutComponentIn)
  .use("/sign-up", AuthLayoutComponentUp)
  .use("/messenger", DefaultLayoutComponent)
  .use("/settings", DefaultLayoutComponent)
  .start();

  console.log(router.routes)