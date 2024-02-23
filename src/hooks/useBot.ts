import { assertState } from "../utils/assertState";
import { useBotId } from "./useBotId";
import { CdsBotEntity, useBots } from "./useBots";

export function useBot(suppress: boolean): CdsBotEntity | undefined;
export function useBot(): CdsBotEntity;

export function useBot(suppress?: boolean) {
  const botId = useBotId(Boolean(suppress));
  const bots = useBots();
  const bot = bots.find((copilot) => copilot.cdsBotId === botId);
  assertState(bot || suppress, "bot not found");
  return bot;
}
