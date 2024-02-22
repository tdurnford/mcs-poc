import { produce } from "immer";

export const createExternalStore = <T>(initialValue: T) => {
  const listeners = new Set<() => void>();
  let state = initialValue;

  const setState = (update: T | ((update: T) => T | undefined)) => {
    state =
      typeof update === "function"
        ? produce(state, update as (update: T) => T | undefined)
        : update;
    listeners.forEach((listener) => listener());
  };

  const reset = () => {
    listeners.clear();
    state = initialValue;
  };

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  const getSnapshot = () => state;

  return {
    subscribe,
    reset,
    getSnapshot,
    setState,
  };
};
