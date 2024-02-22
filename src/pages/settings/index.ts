import { createPageRegisterFn } from "../../hooks/usePages";

import Settings from "./Settings";

export const registerSettingsPage = createPageRegisterFn({
  title: "Settings",
  route: "/environments/:environmentId/copilots/:copilotId/settings",
  level: "copilot",
  component: Settings,
});
