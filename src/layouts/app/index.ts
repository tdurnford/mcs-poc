import { createRegisterLayoutFn } from "../../hooks/useLayouts";

import AppLayout from "./AppLayout";

export const registerAppLayout = createRegisterLayoutFn({
  route: "/environments/:environmentId",
  component: AppLayout,
});
