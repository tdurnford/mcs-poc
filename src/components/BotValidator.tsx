import { memo, PropsWithChildren, useEffect, useState } from "react";
import { useBotId } from "../hooks/useBotId";
import { Spinner, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  spinner: {
    height: "100%",
  },
});

export const BotValidator = memo(({ children }: PropsWithChildren<{}>) => {
  const cdsBotId = useBotId();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  // Set is loading to true for 3 seconds when the bot id changes to simulate a loading state
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [cdsBotId]);

  if (isLoading) {
    return <Spinner className={classes.spinner} />;
  }

  return <>{children}</>;
});

BotValidator.displayName = "BotValidator";
