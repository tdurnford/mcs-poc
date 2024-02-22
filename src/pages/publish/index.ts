import { createPageRegisterFn } from "../../hooks/usePages";

import Publish from "./Publish";

export const registerPublishPage = createPageRegisterFn({
  title: "Publish",
  route: "/environments/:environmentId/copilots/:copilotId/publish",
  level: "copilot",
  component: Publish,
});
