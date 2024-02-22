import { makeStyles } from "@fluentui/react-components";
import { type PropsWithChildren } from "react";
import { HeaderNav } from "../../components/HeaderNav";

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
      <HeaderNav />
      {children}
    </div>
  );
};

export default CopilotLayout;
