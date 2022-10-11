/* Project name : movie-web */
/* #7.1 toDo */
 
import { useState } from "react";

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
    setTodo((currentArray) => [...currentArray, text])
  }


  return (
    <div>  
      <h1>My to do list ({todo.length}) </h1>
      <form onSubmit={submitEvent}>
        <input type="text" onChange={changeEvent} value={text} placeholder="Write your to do..."/>
        <button>Add</button>
      </form>
      <hr />
      {todo.map((item, index)=><li key={index}>{item}</li>)}
    </div>
  )
}

export default App;
