import { makeStyles } from "@fluentui/react-components";
import { type PropsWithChildren } from "react";
import { TopNav } from "./TopNav";
import { BotValidator } from "../../components/BotValidator";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
});

const CopilotLayout = ({ children }: PropsWithChildren<{}>) => {
  const classes = useStyles();
  return (
    <BotValidator>
      <div className={classes.container}>
        <TopNav />
        {children}
      </div>
    </BotValidator>
  );
};

export default CopilotLayout;
