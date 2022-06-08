import { useRouter } from "./hooks/useRouter";
import {
  AuthLayoutComponent,
  DefaultLayoutComponent,
} from "./layouts/create-layouts";

const router = useRouter(".app");

router
  .use("/", AuthLayoutComponent)
  .use("/sign-up", AuthLayoutComponent)
  .use("/messenger", DefaultLayoutComponent)
  .use("/settings", DefaultLayoutComponent)
  .start();
