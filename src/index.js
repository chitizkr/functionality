import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import OptApp from "./application/OTPinput/OptApp";
// import TodoList from "./application/to-do-list/TodoList";

// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <TodoList /> */}
    <OptApp />
  </React.StrictMode>
);
