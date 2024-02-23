import { makeStyles } from "@fluentui/react-components";
import { type PropsWithChildren } from "react";
import { SideNav } from "./SideNav";

const useStyles = makeStyles({
  container: {
    display: "flex",
    height: "100%",
  },
  content: {
    flexGrow: 1,
  },
});

const EnvironmentLayout = ({ children }: PropsWithChildren<{}>) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SideNav />
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default EnvironmentLayout;
