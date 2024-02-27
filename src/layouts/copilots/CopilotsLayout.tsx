import { makeStyles, tokens } from "@fluentui/react-components";
import { PropsWithChildren } from "react";
import CopilotsList from "./CopilotsList";

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "min-content 1fr",
    height: "100%",
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
      <div>{children}</div>
    </div>
  );
};

export default CopilotsLayout;
