import { createPageRegisterFn } from "../../hooks/usePages";

import Content from "./Content";

export const registerContentPage = createPageRegisterFn({
  title: "Content",
  route: "/environments/:environmentId/copilots/:copilotId/content",
  level: "copilot",
  component: Content,
});
