const RenderTodos = ( { todos, deleteTodo, addTask, editTask, deleteTask } ) => {

 //requires component Home.js to render properly. cannot render from app.js

    return (
        <div className="renderTodos">
            {
                todos.map(obj => (
                    <div className="todo-preview" key={obj.id}>
                        <p>{obj.todoName}</p>
                        <div className="tasks">
                            {
                                obj.tasks.map(task => (
                                    
                                    <div className="task" key={task.taskId}>
                                        <p>{task.task}</p>
                                        <button className="edit-task" onClick={() => editTask(task.taskId)}>Edit</button>
                                        <button className="delete-task" onClick={() => deleteTask(task.taskId)}>Delete</button>
                                    </div>
                                ))
                            }
                        </div>
                        <p>{obj.isComplete}</p>
                        <button className="addTask" onClick={() => addTask(obj.id)}>Add Task</button>
                        <button className="deleteTodo" onClick={() => deleteTodo(obj.id)}>Delete To Do</button>
                    </div>
                ))
            }
        </div>
    );
  }

export default RenderTodos;