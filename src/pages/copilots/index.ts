import { Bot20Filled, Bot20Regular, bundleIcon } from "@fluentui/react-icons";

import { createPageRegisterFn } from "../../hooks/usePages";

import Copilots from "./Copilots";

const BotIcon = bundleIcon(Bot20Filled, Bot20Regular);

export const registerCopilotPage = createPageRegisterFn({
  title: "Copilot",
  route: "/environments/:environmentId/copilots",
  level: "app",
  icon: BotIcon,
  component: Copilots,
});
