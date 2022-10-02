/* Project name : movie-web */
/* #6.0 */
 
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev+1);
  console.log("render");
  return (
    <div>
      <h1> Welcome back!!! </h1>
      <button onClick={onClick}>Click me</button>
      <span> Total click : {counter}</span>
    </div>
  )
}

export default App;
