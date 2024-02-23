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

import { useBotPages } from "../../hooks/usePages";
import { useBotId } from "../../hooks/useBotId";
import { useEnvironmentId } from "../../hooks/useEnvironmentId";
import { useBot } from "../../hooks/useBot";

const isString = (value: unknown): value is string => typeof value === "string";

const useStyles = makeStyles({
  container: {
    "--_height": "64px",
    ...shorthands.borderBottom("1px", "solid", tokens.colorNeutralStroke1),
    ...shorthands.padding("8px", "20px"),
    alignItems: "center",
    columnGap: "12px",
    display: "flex",
    height: "var(--_height)",
    minHeight: "var(--_height)",
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
  const cdsBotId = useBotId();
  const classes = useStyles();
  const environmentId = useEnvironmentId();
  const history = useHistory();
  const { displayName } = useBot();
  const { pathname } = useLocation();
  const [pages] = useBotPages();

  const selectedValue = pages.reduce<string | undefined>((current, page) => {
    if (matchPath(pathname, { path: page.route, exact: page.exact })) {
      return page.route;
    }
    return current;
  }, undefined);

  const handleTabSelect = useCallback<NonNullable<TabListProps["onTabSelect"]>>(
    (_, { value }) => {
      if (isString(value)) {
        history.push(generatePath(value, { cdsBotId, environmentId }));
      }
    },
    [cdsBotId, environmentId, history]
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
