/* Project name : movie-web */
/* #7.5 Movie app */

//https://reactrouter.com/en/main/start/overview

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

  import Home from "./routes/Home";
  import Detail from "C:/Users/ahybi/movie-web/src/routes/Datail"

  function App(){
    return (
      <Router>
        <Switch>
          <Route path="/movie">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }

export default App;
