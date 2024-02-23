import { Redirect, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import { usePages } from "../hooks/usePages";
import { makeStyles } from "@fluentui/react-components";
import { useLayouts } from "../hooks/useLayouts";
import { useCopilot } from "../hooks/useCopilot";
import { Suspense } from "react";

const useStyles = makeStyles({
  container: {
    height: "100%",
  },
});

export const AppRouter = () => {
  const classes = useStyles();
  const copilot = useCopilot(true);
  const [pages] = usePages();
  const [layouts] = useLayouts();

  return (
    <div className={classes.container}>
      <Switch>
        {pages.map(({ title, route, component: Component, exact }) => {
          const resolvedLayouts = layouts.filter((layout) => {
            return (
              route.startsWith(layout.route) &&
              !layout.omitRoutes?.some((omit) => route.startsWith(omit))
            );
          });

          const helmet = (
            <Helmet>
              <title>
                {title} - {copilot ? `${copilot.displayName} -` : ""} Studio
              </title>
            </Helmet>
          );

          if (!Component) {
            return null;
          }

          return (
            <Route key={route} path={route} exact={exact}>
              {resolvedLayouts.reduce(
                (acc, layout) => {
                  const { component: Layout } = layout;
                  return <Layout>{acc}</Layout>;
                },
                <>
                  {helmet}
                  <Suspense fallback={null}>
                    <Component />
                  </Suspense>
                </>
              )}
            </Route>
          );
        })}
        <Redirect to="/environments/~default/home" />
      </Switch>
    </div>
  );
};
export default AppRouter;
