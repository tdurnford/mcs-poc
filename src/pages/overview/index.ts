import { lazy } from "react";
import { createPageRegisterFn } from "../../hooks/usePages";

const Overview = lazy(() => import("./Overview"));

export const registerOverviewPage = createPageRegisterFn({
  title: "Overview",
  route: "/environments/:environmentId/copilots/:copilotId/overview",
  level: "copilot",
  component: Overview,
});
