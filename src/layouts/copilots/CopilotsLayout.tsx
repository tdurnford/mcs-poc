import { makeStyles, tokens } from "@fluentui/react-components";
import { PropsWithChildren } from "react";
import CopilotsList from "./CopilotsList";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexGrow: 1,
    height: "100%",
  },
  content: {
    flexGrow: 1,
  },
  link: {
    color: "black",
    textDecorationLine: "none",
  },
  list: {
    backgroundColor: tokens.colorNeutralBackground2,
    display: "flex",
    flexDirection: "column",
    rowGap: "8px",
  },
});

const CopilotsLayout = ({ children }: PropsWithChildren<{}>) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CopilotsList />
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default CopilotsLayout;
