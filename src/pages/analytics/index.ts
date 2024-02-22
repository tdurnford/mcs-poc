import { createPageRegisterFn } from "../../hooks/usePages";

import Analytics from "./Analytics";

export const registerAnalyticsPage = createPageRegisterFn({
  title: "Analytics",
  route: "/environments/:environmentId/copilots/:copilotId/analytics",
  level: "copilot",
  component: Analytics,
});
