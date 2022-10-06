/* Project name : movie-web */
/* #6.3 */
 
import { useState, useEffect } from "react";

function Hello(){
  useEffect(()=>{
    console.log("created");
    return() => console.log("destroyed"); // clean up function : 컴포넌트가 destrroy될 때 특정 코드가 작동함.
  },[])

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
