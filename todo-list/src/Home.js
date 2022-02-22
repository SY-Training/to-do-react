import { useState, useRef } from "react";
import RenderTodos from "./modules/RenderTodos";
import createTodo from "./modules/CreateTodo"

// Array required for rasks, or will have to add id for each task
const Home = () => {
    const [myTodos, setTodos] = useState([
        { todoName: 'test',
        todoDescription: "testy",
        tasks: ["first task", "second task"],
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
  
    return (
      <div className="home">
        <input name='todoName' type="text" placeholder="Create task" ref={inputRef} />
        <button onClick={() => postTodo()}>Create Task</button>
        <RenderTodos todos={myTodos} title="All Blogs" />
      </div>
    );
  }
   
  export default Home;