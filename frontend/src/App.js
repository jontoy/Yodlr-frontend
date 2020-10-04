import React from "react";
import Navigation from "./components/Navigation";
import Routes from "./components/Routes";
import "./App.css";

function App() {
  return (
    <div className="App bg-light">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
