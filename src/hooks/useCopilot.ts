import { assertState } from "../utils/assertState";
import { useCopilotId } from "./useCopilotId";
import { Copilot, useCopilots } from "./useCopilots";

export function useCopilot(suppress: boolean): Copilot | undefined;
export function useCopilot(): Copilot;

export function useCopilot(suppress?: boolean) {
  const copilotId = useCopilotId(Boolean(suppress));
  const copilots = useCopilots();
  const copilot = copilots.find((copilot) => copilot.id === copilotId);
  assertState(copilot || suppress, "Copilot not found");
  return copilot;
}
