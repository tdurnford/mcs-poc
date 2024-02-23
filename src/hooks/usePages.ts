import { type ComponentType, useSyncExternalStore } from "react";
import { createExternalStore } from "../utils/externalStore";
import { FluentIcon } from "@fluentui/react-icons";

type CopilotPath = `/environments/:environmentId/copilots/:copilotId${string}`;
type EnvironmentPath = `/environments/:environmentId${string}`;

export type Page = {
  /**
   * The title of the page
   */
  title: string;
  /**
   * The component to render for the page
   */
  component: ComponentType | null;
  /**
   * Determines if the page should be hidden from the navigation menus
   */
  hidden?: boolean;
  /**
   * Determines if the page should be disabled
   */
  disabled?: boolean;
  /**
   * Determines if the route should be an exact match
   */
  exact?: boolean;
  /**
   * Feature flag to determine if the page should be enabled
   */
  featureFlag?: string;
  /**
   * The minimum solution version required to view the page
   */
  minimumSolutionVersion?: string;
} & (
  | {
      /**
       * This is used to determine if the page is an app page or a copilot page
       */
      level: "app";
      /**
       * The icon to display in the navigation
       */
      icon: FluentIcon;
      /**
       * The route for the page
       */
      route: EnvironmentPath;
    }
  | {
      /**
       * This is used to determine if the page is an app page or a copilot page
       */
      level: "copilot";
      /**
       * The route for the page
       */
      route: CopilotPath;
    }
);

export type AppPage = Extract<Page, { level: "app" }>;
export type CopilotPage = Extract<Page, { level: "copilot" }>;

export const isAppPage = (page: Page): page is AppPage => page.level === "app";

export const isCopilotPage = (page: Page): page is CopilotPage =>
  page.level === "copilot";

const store = createExternalStore([] as Page[]);

export const createPageRegisterFn = (page: Page) => () => {
  const pages = store.getSnapshot();
  store.setState([...pages, page]);

  return () => {
    const pages = store.getSnapshot();
    store.setState(pages.filter((p) => p !== page));
  };
};

export function usePages<T extends Page>(
  filter: (page: Page) => page is T
): readonly [T[]];

export function usePages(): readonly [Page[]];

export function usePages<T extends Page>(filter?: (page: Page) => page is T) {
  const pages = useSyncExternalStore(store.subscribe, store.getSnapshot);

  if (filter) {
    return [pages.filter(filter)] as const;
  }
  return [pages] as const;
}

export const useAppPages = () => {
  return usePages(isAppPage);
};

export const useCopilotPages = () => {
  return usePages(isCopilotPage);
};
