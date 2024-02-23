import {
  type ComponentType,
  useSyncExternalStore,
  PropsWithChildren,
} from "react";
import { createExternalStore } from "../utils/externalStore";

export type Layout = {
  route: string;
  component: ComponentType<PropsWithChildren>;
  omitRoutes?: string[];
};

const store = createExternalStore([] as Layout[]);

export const createRegisterLayoutFn = (layout: Layout) => () => {
  const layouts = store.getSnapshot();
  store.setState([...layouts, layout]);

  return () => {
    const pages = store.getSnapshot();
    store.setState(pages.filter((l) => l !== layout));
  };
};

export const useLayouts = () => {
  const layout = useSyncExternalStore(store.subscribe, store.getSnapshot);

  return [layout] as const;
};
