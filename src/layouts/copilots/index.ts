import { createRegisterLayoutFn } from "../../hooks/useLayouts";

import CopilotsLayout from "./CopilotsLayout";

export const registerCopilotsLayout = createRegisterLayoutFn({
  route: "/environments/:environmentId/bots",
  component: CopilotsLayout,
});
