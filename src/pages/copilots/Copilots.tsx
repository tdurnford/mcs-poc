import {
  Redirect,
  generatePath,
  matchPath,
  useLocation,
} from "react-router-dom";
import { useCopilots } from "../../hooks/useCopilots";
import { useEnvironmentId } from "../../hooks/useEnvironmentId";

const isFrom = (state: unknown): state is { from: string } =>
  typeof state === "object" && state !== null && "from" in state;

const Copilots = () => {
  const environmentId = useEnvironmentId();
  const { state } = useLocation();
  const [firstCopilot] = useCopilots();

  const match = matchPath<{ copilotId: string }>(
    isFrom(state) ? state.from : "",
    {
      path: "/environments/:environmentId/copilots/:copilotId",
      exact: false,
    }
  );

  const previousCopilotId = match?.params.copilotId;

  if (previousCopilotId || firstCopilot) {
    return (
      <Redirect
        to={generatePath(
          "/environments/:environmentId/copilots/:copilotId/overview",
          {
            environmentId,
            copilotId: previousCopilotId || firstCopilot.id,
          }
        )}
      />
    );
  }

  // Probably redirect to creation
  return <div>Copilots</div>;
};

export default Copilots;
