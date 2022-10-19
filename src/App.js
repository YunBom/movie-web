/* Project name : movie-web */
/* #7.6 Movie app */
// package.json 참고. 터미널에 [ npm run deploy ] 적으면 io 페이지에 업로드
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
          <Route path="/movie/:movieCd">
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
