import {
  Subtitle2,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { type PropsWithChildren } from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  header: {
    ...shorthands.padding("12px", "24px"),
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
  },
});

const AppLayout = ({ children }: PropsWithChildren) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Subtitle2>Studio</Subtitle2>
      </header>
      {children}
    </div>
  );
};

export default AppLayout;
