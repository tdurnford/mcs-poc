const bots = [
  {
    displayName: "Copilot 1",
    cdsBotId: "copilot-1",
  },
  {
    displayName: "Copilot 2",
    cdsBotId: "copilot-2",
  },
  {
    displayName: "Copilot 3",
    cdsBotId: "copilot-3",
  },
] as const;

export type CdsBotEntity = (typeof bots)[0];

export const useBots = () => {
  return bots;
};
