import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navBar";
import Competition from "./components/competition";
import CompetitionSelect from "./components/competitionSelect";
import NotFound from "./components/common/notFound";

import "./App.css";

//Router propbelm: https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually?page=1&tab=votes#tab-top

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/comp/:compId" component={Competition} />
          <Route path="/select" component={CompetitionSelect} />

          <Route path="/not-found" component={NotFound} />
          <Redirect exact from="/" to="/select" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

//test comp: 15668S
