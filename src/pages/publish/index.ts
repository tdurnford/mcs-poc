import { lazy } from "react";
import { createPageRegisterFn } from "../../hooks/usePages";

const Publish = lazy(() => import("./Publish"));

export const registerPublishPage = createPageRegisterFn({
  title: "Publish",
  route: "/environments/:environmentId/copilots/:copilotId/publish",
  level: "copilot",
  component: Publish,
});
