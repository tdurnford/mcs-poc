import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

import AppRouter from "./components/AppRouter";

import { registerOverviewPage } from "./pages/overview";
import { registerPublishPage } from "./pages/publish";
import { registerHomePage } from "./pages/home";
import { registerCopilotPage } from "./pages/copilots";
import { registerCopilotsLayout } from "./layouts/copilots";
import { registerCopilotLayout } from "./layouts/copilot";
import { registerEnvironmentLayout } from "./layouts/environment";
import { registerAppLayout } from "./layouts/app";
import { registerContentPage } from "./pages/content";
import { registerAnalyticsPage } from "./pages/analytics";
import { registerSettingsPage } from "./pages/settings";
import { registerCreatePage } from "./pages/create";

import "./App.css";

const style = { height: "100dvh" };

function App() {
  useEffect(() => {
    // Layouts
    const unregisterCopilotLayout = registerCopilotLayout();
    const unregisterCopilotsLayout = registerCopilotsLayout();
    const unregisterEnvironmentLayout = registerEnvironmentLayout();
    const unregisterAppLayout = registerAppLayout();

    // Pages
    const unregisterHomePage = registerHomePage();
    const unregisterCreatePage = registerCreatePage();
    const unregisterOverviewPage = registerOverviewPage();
    const unregisterContentPage = registerContentPage();
    const unregisterPublishPage = registerPublishPage();
    const unregisterAnalyticsPage = registerAnalyticsPage();
    const unregisterSettingsPage = registerSettingsPage();
    const unregisterCopilotPage = registerCopilotPage();

    return () => {
      unregisterCopilotsLayout();
      unregisterCopilotLayout();
      unregisterEnvironmentLayout();
      unregisterAppLayout();

      unregisterCopilotPage();
      unregisterCreatePage();
      unregisterHomePage();
      unregisterOverviewPage();
      unregisterPublishPage();
      unregisterContentPage();
      unregisterAnalyticsPage();
      unregisterSettingsPage();
    };
  }, []);

  return (
    <BrowserRouter>
      <FluentProvider style={style} theme={webLightTheme}>
        <AppRouter />
      </FluentProvider>
    </BrowserRouter>
  );
}

export default App;
