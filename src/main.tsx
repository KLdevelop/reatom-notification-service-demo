import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { reatomContext } from "@reatom/npm-react";
import { ctx } from "./reatom/context.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <reatomContext.Provider value={ctx}>
      <App />
    </reatomContext.Provider>
  </React.StrictMode>
);
