import {
  Subtitle2,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { memo, type PropsWithChildren } from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  content: {
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "hidden",
  },
  header: {
    ...shorthands.padding("12px", "24px"),
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
  },
});

const AppLayout = memo(({ children }: PropsWithChildren<{}>) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Subtitle2>Studio</Subtitle2>
      </header>
      <div className={classes.content}>{children}</div>
    </div>
  );
});

AppLayout.displayName = "AppLayout";

export default AppLayout;
