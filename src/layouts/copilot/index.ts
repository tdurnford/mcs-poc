import { createRegisterLayoutFn } from "../../hooks/useLayouts";

import CopilotLayout from "./CopilotLayout";

export const registerCopilotLayout = createRegisterLayoutFn({
  route: "/environments/:environmentId/copilots/:copilotId",
  component: CopilotLayout,
});
