import { matchPath, useLocation } from "react-router-dom";
import { assertState } from "../utils/assertState";

export const useEnvironmentId = () => {
  const { pathname } = useLocation();
  const match = matchPath<{ environmentId: string }>(pathname, {
    path: "/environments/:environmentId",
    exact: false,
  });

  assertState(match?.params.environmentId, "environmentId");

  return match?.params.environmentId;
};
