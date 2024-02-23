import { createRegisterLayoutFn } from "../../hooks/useLayouts";

import CopilotLayout from "./CopilotLayout";
import ChatLayout from "./ChatLayout";

export const registerCopilotLayout = createRegisterLayoutFn({
  route: "/environments/:environmentId/copilots/:copilotId",
  omitRoutes: ["/environments/:environmentId/copilots/:copilotId/adaptive"],
  component: CopilotLayout,
});

export const registerChatLayout = createRegisterLayoutFn({
  route: "/environments/:environmentId/copilots/:copilotId",
  component: ChatLayout,
});
