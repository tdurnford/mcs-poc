import { useEffect, useRef, useState } from "react";

export type Unsubscribe = () => void;
export type Subscribe = (listener: () => void) => Unsubscribe;
export type GetSnapshot<Snapshot> = () => Snapshot;

const useRefFrom = <T>(value: T) => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};

export function useSyncExternalStore<Snapshot>(
  subscribe: Subscribe,
  getSnapshot: GetSnapshot<Snapshot>
): Snapshot {
  const [local, setLocal] = useState(() => getSnapshot());

  const setLocalRef = useRefFrom(setLocal);
  const getSnapshotRef = useRefFrom(getSnapshot);

  useEffect(() => {
    return subscribe(() => {
      const snapshot = getSnapshotRef.current();
      setLocalRef.current(snapshot);
    });
  }, [getSnapshot, getSnapshotRef, setLocalRef, subscribe]);

  return local;
}
