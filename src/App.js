import React from "react";
import Navbar from "./components/navBar/navBar";
import Competition from "./components/competition";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Competition />
      </main>
    </React.Fragment>
  );
}

export default App;
