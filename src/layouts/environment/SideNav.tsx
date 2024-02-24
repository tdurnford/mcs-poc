import {
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { Link, generatePath, matchPath, useLocation } from "react-router-dom";
import { useAppPages } from "../../hooks/usePages";
import { useEnvironmentId } from "../../hooks/useEnvironmentId";
import {
  iconFilledClassName,
  iconRegularClassName,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  container: {
    ...shorthands.padding("12px"),
    ...shorthands.borderRight("1px", "solid", tokens.colorNeutralStroke1),
    alignItems: "center",
    backgroundColor: tokens.colorNeutralBackground2,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    rowGap: "8px",
  },
  icon: {
    "--_size": "28px",
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
    alignItems: "center",
    backgroundColor: tokens.colorNeutralBackground3,
    display: "flex",
    height: "var(--_size)",
    justifyContent: "center",
    marginBottom: "4px",
    width: "var(--_size)",

    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground3Hover,

      [`& > .${iconRegularClassName}`]: {
        display: "none",
      },
      [`& > .${iconFilledClassName}`]: {
        display: "inline",
      },

      "&.active": {
        backgroundColor: tokens.colorBrandBackgroundHover,

        [`& > .${iconRegularClassName}`]: {
          display: "none",
        },
        [`& > .${iconFilledClassName}`]: {
          display: "inline",
        },
      },
    },

    "&:active": {
      backgroundColor: tokens.colorNeutralBackground5Pressed,
    },

    "&.active": {
      backgroundColor: tokens.colorBrandBackground,

      [`& > .${iconRegularClassName}`]: {
        display: "none",
        color: tokens.colorNeutralForegroundOnBrand,
      },
      [`& > .${iconFilledClassName}`]: {
        display: "inline",
        color: tokens.colorNeutralForegroundOnBrand,
      },
    },
  },
  link: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "black",
    textDecorationLine: "none",
  },
});

export const SideNav = () => {
  const environmentId = useEnvironmentId();
  const classes = useStyles();
  const { pathname } = useLocation();
  const [pages] = useAppPages();

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

  return (
    <div className={classes.container}>
      {pages.map(({ title, route, icon: Icon }) => {
        const path = Array.isArray(route) ? route[0] : route;
        const isActive = selectedValue === path;

        return (
          <Link
            title={title}
            key={path}
            className={mergeClasses(classes.link, isActive && "active")}
            to={{
              pathname: generatePath(path, {
                environmentId,
              }),
              state: { from: pathname },
            }}
          >
            <div className={mergeClasses(classes.icon, isActive && "active")}>
              {Icon ? <Icon /> : null}
            </div>
            {title}
          </Link>
        );
      })}
    </div>
  );
};
