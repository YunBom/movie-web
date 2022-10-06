/* Project name : movie-web */
/* #6.4 clean up */
 
import { useState, useEffect } from "react";

function Hello(){
  useEffect(()=>{
    console.log("hi")
    return () => console.log("bye");
  })

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
