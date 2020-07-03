import React from "react";
import ReactDom from "react-dom";
import New from "./New";

import "./App.css";

function App(employee) {
  return (
    <div className="App">
      <h1>Welcome to Pronteff IT</h1>
      <New name="uday" role="software"></New>
    </div>
  );
}

export default App;
