const copilots = [
  {
    displayName: "Copilot 1",
    id: "copilot-1",
  },
  {
    displayName: "Copilot 2",
    id: "copilot-2",
  },
  {
    displayName: "Copilot 3",
    id: "copilot-3",
  },
] as const;

export type Copilot = (typeof copilots)[0];

export const useCopilots = () => {
  return copilots;
};
