import React, { useRef, useState } from 'react';
import createTodo from './modules/CreateTodo';
import RenderTodos from './modules/RenderTodos';

function App() {

  const [myTodos, setTodos] = useState([
    { todoName: 'test',
    todoDescription: "testy",
    tasks: {},
    isComplete: false,
    id: 1},
  ])

  const inputRef = useRef("");

  // Send to CreateTodo to return todo object and push to array.
  function postTodo(){
    if(inputRef.current.value === ""){
      console.log("Empty input");
    }

    else {
      let newTodo = createTodo(inputRef.current.value);
      myTodos.push(newTodo);
      console.log(myTodos);
      inputRef.current.value = null;
    }
  }

  // on submit, getTodo is sent to create todo, then getTodo is set to "" to reset.


  // Need an array of tasks. Create factory function for tasks
  // Map array to divs

    return (
        <>
          <input name='todoName' type="text" placeholder="Create task" ref={inputRef} />
          <button onClick={() => postTodo()}>Create Task</button>
          <h3>{myTodos}</h3>
          <RenderTodos allTodos={myTodos}/>
        </>
    );
}

export default App;
