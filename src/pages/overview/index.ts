import { createPageRegisterFn } from "../../hooks/usePages";

import Overview from "./Overview";

export const registerOverviewPage = createPageRegisterFn({
  title: "Overview",
  route: "/environments/:environmentId/copilots/:copilotId/overview",
  level: "copilot",
  component: Overview,
});
