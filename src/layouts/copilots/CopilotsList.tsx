import {
  Subtitle1,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { Link, generatePath } from "react-router-dom";
import { useEnvironmentId } from "../../hooks/useEnvironmentId";
import { useBotId } from "../../hooks/useBotId";
import { useBots } from "../../hooks/useBots";

const useStyles = makeStyles({
  container: {
    "--_header-height": "64px",
    ...shorthands.borderRight("1px", "solid", tokens.colorNeutralStroke1),
    backgroundColor: tokens.colorNeutralBackground2,
    width: "240px",
  },
  header: {
    ...shorthands.borderBottom("1px", "solid", tokens.colorNeutralStroke1),
    ...shorthands.padding("12px"),
    alignItems: "center",
    display: "flex",
    height: "var(--_header-height)",
  },
  item: {
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
    ...shorthands.padding("4px", "8px"),
    backgroundColor: tokens.colorNeutralBackground3,

    "&.active": {
      backgroundColor: tokens.colorBrandBackground,
      color: tokens.colorNeutralForegroundOnBrand,
    },

    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground3Hover,

      "&.active": {
        backgroundColor: tokens.colorBrandBackgroundHover,
      },
    },

    "&:active": {
      backgroundColor: tokens.colorNeutralBackground3Pressed,

      "&.active": {
        backgroundColor: tokens.colorBrandBackgroundPressed,
      },
    },
  },
  link: {
    color: "black",
    overflowX: "hidden",
    textDecorationLine: "none",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
  },
  list: {
    ...shorthands.padding("12px"),
    display: "flex",
    flexDirection: "column",
    height: "100%",
    maxHeight: "calc(100vh - var(--_header-height))",
    overflowY: "auto",
    rowGap: "4px",

    "& > li": {
      listStyleType: "none",
    },
  },
});

const CopilotsList = () => {
  const classes = useStyles();
  const botId = useBotId(true);
  const copilots = useBots();
  const environmentId = useEnvironmentId();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Subtitle1>Copilots</Subtitle1>
      </div>
      <div className={classes.list}>
        {copilots.map((copilot) => {
          const isActive = botId === copilot.cdsBotId;

          return (
            <Link
              key={copilot.cdsBotId}
              to={generatePath(
                "/environments/:environmentId/bots/:cdsBotId/overview",
                {
                  environmentId,
                  cdsBotId: copilot.cdsBotId,
                }
              )}
              className={mergeClasses(classes.link, isActive && "active")}
            >
              <div className={mergeClasses(classes.item, isActive && "active")}>
                {copilot.displayName}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CopilotsList;
