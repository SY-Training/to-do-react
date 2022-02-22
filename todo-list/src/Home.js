import { useState, useEffect, useRef } from "react";
import RenderTodos from "./modules/RenderTodos";
import createTodo from "./modules/CreateTodo"

// Array required for rasks, or will have to add id for each task
const Home = () => {
    const [myTodos, setTodos] = useState([
        { todoName: 'test1', todoDescription: "testy1", tasks: ["first task", "second task"], isComplete: false, id: 1},
        { todoName: 'test2', todoDescription: "testy2", tasks: ["first task", "second task"], isComplete: false, id: 2},
        { todoName: 'test3', todoDescription: "testy3", tasks: ["first task", "second task"], isComplete: false, id: 3}
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

    // Using array filter, which returns a new array under newTodos where the todos don't have the same ID as
    //  the one specified, then using that to delete the todo.
    const deleteTodo = (id) => {
      const newTodos = myTodos.filter(todo => todo.id !== id);
      setTodos(newTodos);
    }

    useEffect(() => {
      
    }, [myTodos])
  
    return (
      <div className="home">
        <input name='todoName' type="text" placeholder="Create task" ref={inputRef} />
        <button onClick={() => postTodo()}>Create Task</button>
        <RenderTodos todos={myTodos} deleteTodo={deleteTodo} />
      </div>
    );
  }
   
  export default Home;