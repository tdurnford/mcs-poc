import { lazy } from "react";
import { Bot20Filled, Bot20Regular, bundleIcon } from "@fluentui/react-icons";

import { createPageRegisterFn } from "../../hooks/usePages";

const Copilots = lazy(() => import("./Copilots"));

const BotIcon = bundleIcon(Bot20Filled, Bot20Regular);

export const registerCopilotPage = createPageRegisterFn({
  priority: 10,
  title: "Copilot",
  route: "/environments/:environmentId/copilots",
  level: "app",
  icon: BotIcon,
  component: Copilots,
});
