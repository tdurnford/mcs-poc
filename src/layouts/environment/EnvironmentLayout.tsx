import { makeStyles } from "@fluentui/react-components";
import { type PropsWithChildren } from "react";
import { SideNav } from "./SideNav";

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "min-content 1fr",
    height: "100%",
  },
});

const EnvironmentLayout = ({ children }: PropsWithChildren<{}>) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SideNav />
      <div>{children}</div>
    </div>
  );
};

export default EnvironmentLayout;
