import { lazy } from "react";
import { Home20Filled, Home20Regular, bundleIcon } from "@fluentui/react-icons";

import { createPageRegisterFn } from "../../hooks/usePages";

const Home = lazy(() => import("./Home"));

const HomeIcon = bundleIcon(Home20Filled, Home20Regular);

export const registerHomePage = createPageRegisterFn({
  title: "Home",
  route: "/environments/:environmentId/home",
  level: "app",
  icon: HomeIcon,
  component: Home,
});
