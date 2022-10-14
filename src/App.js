/* Project name : movie-web */
/* #7.5 Movie app */

//https://reactrouter.com/en/main/start/overview

import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

  import Home from "./routes/Home";
  import Detail from "./routes/Home";
  import { useState, useEffect } from "react";

  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="/movie" element={<Detail />} />
      </Route>
    )
  );


export default App;
