import {
  Subtitle1,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { Link, generatePath } from "react-router-dom";
import { useEnvironmentId } from "../../hooks/useEnvironmentId";
import { useCopilotId } from "../../hooks/useCopilotId";
import { useCopilots } from "../../hooks/useCopilots";

const useStyles = makeStyles({
  container: {
    ...shorthands.borderRight("1px", "solid", tokens.colorNeutralStroke1),
    backgroundColor: tokens.colorNeutralBackground2,
  },
  header: {
    ...shorthands.borderBottom("1px", "solid", tokens.colorNeutralStroke1),
    ...shorthands.padding("12px"),
    alignItems: "center",
    display: "flex",
    height: "36px",
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
    width: "180px",
  },
  list: {
    ...shorthands.padding("12px"),
    display: "flex",
    flexDirection: "column",
    height: "100%",
    rowGap: "4px",

    "& > li": {
      listStyleType: "none",
    },
  },
});

const CopilotsList = () => {
  const classes = useStyles();
  const copilotId = useCopilotId(true);
  const copilots = useCopilots();
  const environmentId = useEnvironmentId();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Subtitle1>Copilots</Subtitle1>
      </div>
      <div className={classes.list}>
        {copilots.map((copilot) => {
          const isActive = copilotId === copilot.id;

          return (
            <Link
              key={copilot.id}
              to={generatePath(
                "/environments/:environmentId/copilots/:copilotId/overview",
                {
                  environmentId,
                  copilotId: copilot.id,
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
