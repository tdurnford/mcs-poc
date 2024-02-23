import { createRegisterLayoutFn } from "../../hooks/useLayouts";

import CopilotLayout from "./CopilotLayout";
import ChatLayout from "./ChatLayout";

export const registerCopilotLayout = createRegisterLayoutFn({
  route: "/environments/:environmentId/bots/:cdsBotId",
  omitRoutes: ["/environments/:environmentId/bots/:cdsBotId/adaptive"],
  component: CopilotLayout,
});

export const registerChatLayout = createRegisterLayoutFn({
  route: "/environments/:environmentId/bots/:cdsBotId",
  component: ChatLayout,
});
