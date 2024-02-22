import { createRegisterLayoutFn } from "../../hooks/useLayouts";

import EnvironmentLayout from "./EnvironmentLayout";

export const registerEnvironmentLayout = createRegisterLayoutFn({
  route: "/environments/:environmentId",
  component: EnvironmentLayout,
});
