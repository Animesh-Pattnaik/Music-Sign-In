import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Sign from "./Components/Sign";
import Landing from "./Components/Landing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Sign />} />
      <Route exact path="Landing" element={<Landing />} />
    </Route>
  )
);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);