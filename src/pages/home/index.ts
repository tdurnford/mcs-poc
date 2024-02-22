import { Home20Filled, Home20Regular, bundleIcon } from "@fluentui/react-icons";

import { createPageRegisterFn } from "../../hooks/usePages";

import Home from "./Home";

const HomeIcon = bundleIcon(Home20Filled, Home20Regular);

export const registerHomePage = createPageRegisterFn({
  title: "Home",
  route: "/environments/:environmentId/home",
  level: "app",
  icon: HomeIcon,
  component: Home,
});
