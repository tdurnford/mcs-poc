import {
  Redirect,
  generatePath,
  matchPath,
  useLocation,
} from "react-router-dom";
import { useBots } from "../../hooks/useBots";
import { useEnvironmentId } from "../../hooks/useEnvironmentId";

const isFrom = (state: unknown): state is { from: string } =>
  typeof state === "object" && state !== null && "from" in state;

const Copilots = () => {
  const environmentId = useEnvironmentId();
  const { state } = useLocation();
  const [firstCopilot] = useBots();

  const match = matchPath<{ botId: string }>(isFrom(state) ? state.from : "", {
    path: "/environments/:environmentId/bots/:cdsBotId",
    exact: false,
  });

  const previousCopilotId = match?.params.botId;

  if (previousCopilotId || firstCopilot) {
    return (
      <Redirect
        to={generatePath(
          "/environments/:environmentId/bots/:cdsBotId/overview",
          {
            environmentId,
            cdsBotId: previousCopilotId || firstCopilot.cdsBotId,
          }
        )}
      />
    );
  }

  // Probably redirect to creation
  return <div>Copilots</div>;
};

export default Copilots;
