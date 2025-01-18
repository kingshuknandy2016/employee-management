import "./App.css";
//import ApplicationRouter from "./routes/ApplicationRouter";
import React from "react";
import ApplicationRouter from "./routes/ApplicationRouter";
function App() {
  return (
    <React.Fragment>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ApplicationRouter />
      </div>
    </React.Fragment>
  );
}

export default App;
