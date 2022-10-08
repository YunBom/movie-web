/* Project name : movie-web */
/* #7.1 toDo */
 
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState([]);   // todo list
  const [text, setText] = useState();   // text = todo
  const changeEvent = (event) => {
    setText(event.target.value);
  }
  const submitEvent = (event) => {  // submit 이벤트
    event.preventDefault();
    if(text === "") {
      return;
    }
    setText("");
    setTodo((currentArray) => [text, ...currentArray])
  }


  return (
    <div>  
      <h1>My to do list ({todo.length}) </h1>
      <form onSubmit={submitEvent}>
        <input type="text" onChange={changeEvent} value={text} placeholder="Write your to do..."/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default App;
