import { useState, useRef } from "react";
import RenderTodos from "./modules/RenderTodos";
import createTodo from "./modules/CreateTodo"

// Array required for rasks, or will have to add id for each task
const Home = () => {
    const [myTodos, setTodos] = useState([
        { todoName: 'test1', tasks: ["first task", "second task"], isComplete: false, id: 1},
        { todoName: 'test2', tasks: ["first task", "second task"], isComplete: false, id: 2},
        { todoName: 'test3', tasks: ["first task", "second task"], isComplete: false, id: 3}
      ])

      const inputRef = useRef("");

      // Send to CreateTodo to return todo object and push to array.
      function postTodo(){
        if(inputRef.current.value === ""){
          console.log("Empty input");
        }
          // React setState doesn't re-render when changing values in its useState array.
          // Instead a new array needs to be declared for it to recognise a change.
          // Noted as newArr here.
        else {
          let newTodo = createTodo(inputRef.current.value);
          myTodos.push(newTodo);
          console.log(myTodos);
          let newArr = myTodos;
          setTodos([...newArr]);
          inputRef.current.value = null;
        }
      }

    // Using array filter, which returns a new array under newTodos where the todos don't have the same ID as
    //  the one specified, then using that to delete the todo.
    const deleteTodo = (id) => {
      const newTodos = myTodos.filter(todo => todo.id !== id);
      setTodos(newTodos);
    }

    const addTask = (id) => {
      let task = window.prompt();
      console.log(task);
      myTodos.forEach(obj => {
        if(obj.id === id) {
          obj.tasks.push(task);
        }
      })
      let newArr = myTodos;
      setTodos([...newArr]);
      console.log(myTodos); // Works but does not re-render todos.

    }
  
    return (
      <div className="home">
        <input name='todoName' type="text" placeholder="Create task" ref={inputRef} />
        <button onClick={() => postTodo()}>Create Task</button>
        {myTodos && <RenderTodos todos={myTodos} deleteTodo={deleteTodo} addTask={addTask} />}
      </div>
    );
  }
   
  export default Home;