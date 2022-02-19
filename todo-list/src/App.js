import React, { useState, useEffect } from 'react';
import createTodo from './modules/CreateTodo';

function App() {

const [getTodo, setTodo] = useState()

const handleChange = e => {
setTodo(e.target.value)
}

// on submit, getTodo is sent to create todo, then getTodo is set to "" to reset.


// Need an array of tasks. Create factory function for tasks

  return (
      <>
        <input type="text" placeholder="Create task" value={getTodo} onChange={handleChange}/>
        <h3>{getTodo}</h3>
      </>
  );
}

export default App;
