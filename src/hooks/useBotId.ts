import { matchPath, useLocation } from "react-router-dom";
import { assertState } from "../utils/assertState";

export function useBotId(): string;
export function useBotId(suppress: boolean): string | undefined;

export function useBotId(suppress?: boolean) {
  const { pathname } = useLocation();
  const match = matchPath<{ cdsBotId: string }>(pathname, {
    path: "/environments/:environmentId/bots/:cdsBotId",
    exact: false,
  });

  assertState(match?.params.cdsBotId || suppress, "cdsBotId");

  return match?.params.cdsBotId;
}
