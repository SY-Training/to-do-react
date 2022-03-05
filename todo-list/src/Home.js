import { useState, useRef } from "react";
import RenderTodos from "./modules/RenderTodos";
import createTodo from "./modules/CreateTodo"
import {v4 as uuID} from 'uuid';

// Array required for rasks, or will have to add id for each task
const Home = () => {
    const [myTodos, setTodos] = useState([
        { todoName: 'test1', tasks: [{ task :"first task", taskId: 5},{ task: "second task", taskId : 6}], isComplete: false, id: 1},
        { todoName: 'test2', tasks: [{ task :"first task", taskId: 1},{ task: "second task", taskId : 2}], isComplete: false, id: 2}
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

    // Creates task and add to toDo. Also requires unique ID. 
    const addTask = (id) => {
      let task = window.prompt();
      console.log(task);
      myTodos.forEach(obj => {
        if(obj.id === id) {
          obj.tasks.push({task : task, taskId : uuID()});
        }
      })
      let newArr = myTodos;
      setTodos([...newArr]);
    }

    // Edit the task inside a todo
    const editTask = (id) => {
      let edit = window.prompt();
      myTodos.forEach(obj => {
        obj.tasks.forEach(subOjb => {
          if(subOjb.taskId === id){
            subOjb.task = edit;
          }
        })
      })
      let newArr = myTodos;
      setTodos([...newArr]);
    } 

    // Delete a task under a todo.
    const deleteTask = (id) => {

      for(let i = 0; i < myTodos.length; i++){
        for(let j = 0; j < myTodos[i].tasks.length; j++){
          console.log(j);
          if(myTodos[i].tasks[j].taskId === id){
            console.log("hiyooooooo " + id);  // WORKS - Try to delete array element from here. Filter or splice
            myTodos[i].tasks.splice(j);
          }
        }
      }
      console.log(myTodos);  // iffy. Removing first elements in tasks removes all of them. 
    

  }

    
    // RenderTodos wrapped in curly braces to be able to use the null check (myTodos &&)
    return (
      <div className="home">
        <div className="header">
          <input name='todoName' className="todoName" type="text" placeholder="Create todo" ref={inputRef} />
          <button onClick={() => postTodo()}>Create todo</button>
        </div>
        <div className="middle">
          {myTodos && <RenderTodos 
                      todos={myTodos} 
                      deleteTodo={deleteTodo} 
                      addTask={addTask} 
                      editTask={editTask}
                      deleteTask={deleteTask}
                      />}
        </div>
      </div>
    );
  }
   
  export default Home;