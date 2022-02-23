const RenderTodos = ( { todos, deleteTodo, addTask } ) => {

 //requires component Home.js to render properly. cannot render from app.js

    return (
        <div className="renderTodos">
            {
                todos.map(obj => (
                    <div className="todo-preview" key={obj.id}>
                        <p>{obj.todoName}</p>
                        <div className="tasks">
                            <p>{obj.tasks}</p>
                        </div>
                        <p>{obj.isComplete}</p>
                        <button className="deleteTodo" onClick={() => deleteTodo(obj.id)}>Delete To Do</button>
                        <button className="addTask" onClick={() => addTask(obj.id)}>Add Task</button>
                    </div>
                ))
            }
        </div>
    );
  }

export default RenderTodos;