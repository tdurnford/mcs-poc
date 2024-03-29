import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { type PropsWithChildren } from "react";
import { BotValidator } from "../../components/BotValidator";

const useStyles = makeStyles({
  container: {
    display: "flex",
    height: "100%",
  },

  content: {
    flexGrow: 1,
  },
  test: {
    ...shorthands.borderLeft("1px", "solid", tokens.colorNeutralStroke1),
    width: "50px",
    height: "100%",
  },
});

const ChatLayout = ({ children }: PropsWithChildren<{}>) => {
  const classes = useStyles();
  return (
    <BotValidator>
      <div className={classes.container}>
        <div className={classes.content}>{children}</div>
        <div className={classes.test}></div>
      </div>
    </BotValidator>
  );
};

export default ChatLayout;
