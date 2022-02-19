import React, { useState, useEffect } from 'react';
import createTodo from './modules/CreateTodo';

function App() {

    let todos = [];

  const [getTodo, setTodo] = useState("")

  const handleChange = e => {
  setTodo(e.target.value)
  }


  function submitTodo() {
    let newObj = createTodo(getTodo);
    todos.push(newObj);
    console.log(todos);
    console.log(getTodo);
    setTodo(""); // Doesn't clear field. Needs work.
    console.log(getTodo);

  }

  // on submit, getTodo is sent to create todo, then getTodo is set to "" to reset.


  // Need an array of tasks. Create factory function for tasks

    return (
        <>
          <input type="text" placeholder="Create task" value={getTodo} onChange={handleChange}/>
          <button onClick={() => submitTodo()}>Create Task</button>
          <h3>{getTodo}</h3>
        </>
    );
}

export default App;
