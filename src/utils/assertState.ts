export function assertState<T>(state: T, message: string): asserts state {
  if (!state) {
    throw new Error(message);
  }
}
