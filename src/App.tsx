import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider, teamsTheme } from "@fluentui/react-northstar";
import { app } from "@microsoft/teams-js";
import { Home } from "./components/Home";
import { ModalDialog } from "./components/ModalDialog";

app.initialize();

export default function App() {
  return (
    <BrowserRouter>
      <Provider theme={teamsTheme}>
        <div id="mainContainer" style={{ padding: "1em" }}>
          <Switch>
            <Route exact path="/" component={Home} />

            {/* Route used for display of dialog */}
            <Route exact path="/modal-dialog" component={ModalDialog} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}
