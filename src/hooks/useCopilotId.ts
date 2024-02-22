import { matchPath, useLocation } from "react-router-dom";
import { assertState } from "../utils/assertState";

export function useCopilotId(): string;
export function useCopilotId(suppress: boolean): string | undefined;

export function useCopilotId(suppress?: boolean) {
  const { pathname } = useLocation();
  const match = matchPath<{ copilotId: string }>(pathname, {
    path: "/environments/:environmentId/copilots/:copilotId",
    exact: false,
  });

  assertState(match?.params.copilotId || suppress, "copilotId");

  return match?.params.copilotId;
}
