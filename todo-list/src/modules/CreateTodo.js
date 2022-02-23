import {v4 as uuid} from 'uuid';

function createTodo(name) {
        /*
    Each todo should be an object
    todoName: "",
    todoDescription: "",
    task: {nested object},
    isComplete: checkbox,
    */

    // If tasks need to be an object, then they will have to use uuID too and have a 
    // nested map in RenderTodos.

    // See if objects can be saved to JSON later on, then they can be moved to different computers.

    return {
        todoName: name,
        tasks: [],
        isComplete: false,
        id: uuid()
    }


}

export default createTodo;