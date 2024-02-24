import { HashRouter } from "react-router-dom";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

import AppRouter from "./components/AppRouter";

import { registerOverviewPage } from "./pages/overview";
import { registerPublishPage } from "./pages/publish";
import { registerHomePage } from "./pages/home";
import { registerCopilotPage } from "./pages/copilots";
import { registerCopilotsLayout } from "./layouts/copilots";
import { registerChatLayout, registerCopilotLayout } from "./layouts/copilot";
import { registerEnvironmentLayout } from "./layouts/environment";
import { registerAppLayout } from "./layouts/app";
import { registerContentPage } from "./pages/content";
import { registerAnalyticsPage } from "./pages/analytics";
import { registerSettingsPage } from "./pages/settings";
import { registerCreatePage } from "./pages/create";

import "./App.css";

const style = { height: "100dvh" };

// Register layouts
registerCopilotLayout();
registerChatLayout();
registerCopilotsLayout();
registerEnvironmentLayout();
registerAppLayout();

// Register pages
registerHomePage();
registerCreatePage();
registerOverviewPage();
registerContentPage();
registerPublishPage();
registerAnalyticsPage();
registerSettingsPage();
registerCopilotPage();

function App() {
  return (
    <HashRouter>
      <FluentProvider style={style} theme={webLightTheme}>
        <AppRouter />
      </FluentProvider>
    </HashRouter>
  );
}

export default App;
