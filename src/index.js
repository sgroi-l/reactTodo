import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

const FORMS = [
  { heading: "All", pressed: "true" },
  { heading: "Active", pressed: "False" },
  { heading: "Completed", pressed: "False" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} filters={FORMS} />
  </React.StrictMode>
);
