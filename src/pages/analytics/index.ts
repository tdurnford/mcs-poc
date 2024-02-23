import { lazy } from "react";
import { createPageRegisterFn } from "../../hooks/usePages";

const Analytics = lazy(() => import("./Analytics"));

export const registerAnalyticsPage = createPageRegisterFn({
  title: "Analytics",
  route: "/environments/:environmentId/bots/:cdsBotId/analytics",
  level: "copilot",
  component: Analytics,
});
