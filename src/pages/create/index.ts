import { Add20Filled, Add20Regular, bundleIcon } from "@fluentui/react-icons";

import { createPageRegisterFn } from "../../hooks/usePages";

import Create from "./Create";

const CreateIcon = bundleIcon(Add20Filled, Add20Regular);

export const registerCreatePage = createPageRegisterFn({
  title: "Create",
  route: "/environments/:environmentId/create",
  level: "app",
  icon: CreateIcon,
  component: Create,
});
