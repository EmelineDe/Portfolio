import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";

// const Resume = lazy(() => import("../pages/Resume"));
//const PageNotFound = lazy(() => import("../pages/PageNotFound"));
import { PageNotFound } from "../pages/PageNotFound";

export const App = () => {
  logCredits();

  return (
    <ThemeProvider>
      <CssBaseline />
      <Router basename="/portfolio">
        <HelmetMeta />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/resume" component={Resume} /> */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
