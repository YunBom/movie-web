/* Project name : movie-web */
/* #6.0 */
 
import { useState, useEffect } from "react";

function App() {

  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev+1);
  const change = (event)=>{
    setKeyword(event.target.value);
  }

  useEffect(()=> {
    console.log("I run when keyword change")
  },[keyword])  // keyword가 변화할 때만 작동. [ ] 안에는 지켜볼 것을 넣기. "~를 지켜봐"
  useEffect(()=> {
    console.log("I run when counter change")
  },[counter])
  useEffect(()=>{
    console.log("I run when keyword or counter")
  }, [keyword, counter])

  return (
    <div>
      <input type="text" onChange={change} placeholder="Search here..."/>
      <h1> Welcome back!!! </h1>
      <button onClick={onClick}>Click me</button>
      <span> Total click : {counter}</span>
    </div>
  )
}

export default App;
