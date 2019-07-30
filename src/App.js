import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navBar";
import Competition from "./components/competition";

import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/:compId" component={Competition} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
