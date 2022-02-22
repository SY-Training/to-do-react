const RenderTodos = ( {todos } ) => {

 //requires component Home.js to render properly. cannot render from app.js


    return (
        <div className="renderTodos">
            {
                todos.map(obj => (
                    <div className="todo-preview" key={obj.id}>
                        <p>{obj.todoName}</p>
                        <p>{obj.todoDescription}</p>
                        <p>{obj.isComplete}</p>
                    </div>
                ))
            }
        </div>
    );
  }

export default RenderTodos;