import React, { useState, useEffect, useRef } from 'react';
import createTodo from './modules/CreateTodo';

function App() {

  let todos = [];

  const inputRef = useRef("");


  function postTodo(){
    if(inputRef.current.value === ""){
      console.log("Empty input");
    }

    else {
      console.log(inputRef.current.value);
      let newTodo = createTodo(inputRef.current.value);
      todos.push(newTodo);
      console.log(todos);
      inputRef.current.value = "";
    }
  }

  // on submit, getTodo is sent to create todo, then getTodo is set to "" to reset.


  // Need an array of tasks. Create factory function for tasks
  // Map array to divs

    return (
        <>
          <input name='todoName' type="text" placeholder="Create task" ref={inputRef} />
          <button onClick={() => postTodo()}>Create Task</button>
          <h3>{todos}</h3>
        </>
    );
}

export default App;
