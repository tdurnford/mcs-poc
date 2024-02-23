import { memo } from "react";
import {
  Redirect,
  Route,
  Switch,
  matchPath,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";

import { usePages } from "../hooks/usePages";
import { makeStyles } from "@fluentui/react-components";
import { useLayouts } from "../hooks/useLayouts";
import { useBot } from "../hooks/useBot";
import { Suspense } from "react";

const useStyles = makeStyles({
  container: {
    height: "100%",
  },
});

export const AppRouter = memo(() => {
  const classes = useStyles();
  const bot = useBot(true);
  const { pathname } = useLocation();
  const [pages] = usePages();
  const [layouts] = useLayouts();

  const resolvedLayouts = layouts.filter((layout) => {
    return matchPath(pathname, {
      path: layout.route,
    });
  });

  const content = (
    <div className={classes.container}>
      <Switch>
        {pages.map(({ title, route, component: Component, exact }) => {
          const helmet = (
            <Helmet>
              <title>
                {title} - {bot ? `${bot.displayName} -` : ""} Studio
              </title>
            </Helmet>
          );

          if (!Component) {
            return null;
          }

          return (
            <Route exact={exact} key={route} path={route}>
              <>
                {helmet}
                <Suspense fallback={null}>
                  <Component />
                </Suspense>
              </>
            </Route>
          );
        })}
        <Redirect to="/environments/~default/home" />
      </Switch>
    </div>
  );

  return resolvedLayouts.reduce((acc, layout) => {
    const { component: Layout } = layout;
    return <Layout>{acc}</Layout>;
  }, content);
});

AppRouter.displayName = "AppRouter";

export default AppRouter;
