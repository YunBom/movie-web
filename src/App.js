/* Project name : movie-web */
/* #6.4 clean up*/
 
import { useState, useEffect } from "react";

function Hello(){
  function destroyFn() {
    console.log("bye");
  }
  function createFn() {
    console.log("created");
    return destroyFn;   // 컴포넌트가 파괴될 때 createFn이 리턴한 destroyFn을 실행.
  }
  useEffect(createFn,[]);

  return(
    <h1>Hello!</h1>
  )
}

function App() {
  const [showing, setShowing] = useState(true);
  const clickEvent = () => {
    setShowing((prev) => !prev);
  }

  return(
    <div>
      <button onClick={clickEvent}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello/> : null}
    </div>
  )
}

export default App;
