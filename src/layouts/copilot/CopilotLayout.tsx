import { makeStyles } from "@fluentui/react-components";
import { type PropsWithChildren } from "react";
import { TopNav } from "../../components/TopNav";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
});

const CopilotLayout = ({ children }: PropsWithChildren) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TopNav />
      {children}
    </div>
  );
};

export default CopilotLayout;
