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
          <Route path="/movie/:movieCd">  {/* movieCd 말고 x나 y를 써줘도 상관없음. 그저 변수가 있다는 것만 알리면 됨. */}
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
