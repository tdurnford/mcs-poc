import { memo, useCallback } from "react";
import {
  useHistory,
  useLocation,
  matchPath,
  generatePath,
} from "react-router-dom";
import {
  TabList,
  Tab,
  type TabListProps,
  makeStyles,
  shorthands,
  tokens,
  Subtitle1,
} from "@fluentui/react-components";

import { useCopilotPages } from "../hooks/usePages";
import { useCopilotId } from "../hooks/useCopilotId";
import { useEnvironmentId } from "../hooks/useEnvironmentId";
import { useCopilot } from "../hooks/useCopilot";

const isString = (value: unknown): value is string => typeof value === "string";

const useStyles = makeStyles({
  container: {
    ...shorthands.borderBottom("1px", "solid", tokens.colorNeutralStroke1),
    ...shorthands.padding("8px", "20px"),
    alignItems: "center",
    columnGap: "12px",
    display: "flex",
  },
  icon: {
    "--_size": "36px",
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
    height: "var(--_size)",
    width: "var(--_size)",
    backgroundColor: tokens.colorBrandBackground,
  },
});

export const TopNav = memo(() => {
  const classes = useStyles();
  const copilotId = useCopilotId();
  const environmentId = useEnvironmentId();
  const history = useHistory();
  const { displayName } = useCopilot();
  const { pathname } = useLocation();
  const [pages] = useCopilotPages();

  const selectedValue = pages.reduce<string | undefined>((current, page) => {
    if (Array.isArray(page.route)) {
      const match = page.route.some((route) =>
        matchPath(pathname, { path: route, exact: page.exact })
      );
      if (match) {
        return page.route[0];
      }
    } else if (matchPath(pathname, { path: page.route, exact: page.exact })) {
      return page.route;
    }
    return current;
  }, undefined);

  const handleTabSelect = useCallback<NonNullable<TabListProps["onTabSelect"]>>(
    (_, { value }) => {
      if (Array.isArray(value)) {
        const [first] = value;
        if (isString(first)) {
          history.push(generatePath(first, { copilotId, environmentId }));
        }
      } else if (isString(value)) {
        history.push(generatePath(value, { copilotId, environmentId }));
      }
    },
    [copilotId, environmentId, history]
  );

  return (
    <div className={classes.container}>
      <div className={classes.icon} />
      <Subtitle1>{displayName}</Subtitle1>
      <TabList onTabSelect={handleTabSelect} selectedValue={selectedValue}>
        {pages.map(({ title, route }) => (
          <Tab value={route}>{title}</Tab>
        ))}
      </TabList>
    </div>
  );
});
