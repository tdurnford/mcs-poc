import { lazy } from "react";
import { createPageRegisterFn } from "../../hooks/usePages";

const Settings = lazy(() => import("./Settings"));

export const registerSettingsPage = createPageRegisterFn({
  title: "Settings",
  route: "/environments/:environmentId/bots/:cdsBotId/settings",
  level: "copilot",
  component: Settings,
});
