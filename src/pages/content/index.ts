import { lazy } from "react";
import { createPageRegisterFn } from "../../hooks/usePages";

const Content = lazy(() => import("./Content"));

export const registerContentPage = createPageRegisterFn({
  title: "Content",
  route: "/environments/:environmentId/bots/:cdsBotId/content",
  level: "copilot",
  component: Content,
});
