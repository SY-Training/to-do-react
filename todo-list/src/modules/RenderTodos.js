import React, { useState } from "react";

const RenderTodos = ( { todos } ) => {
    // loop through each array element and render a div for them.

// Works when objects are here, but not when objects are in app.js
// Perhaps needs a promise?

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
    )
}

export default RenderTodos;