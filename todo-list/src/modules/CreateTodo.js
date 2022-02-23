import React from "react";
import {v4 as uuid} from 'uuid';

function createTodo(name) {
        /*
    Each todo should be an object
    todoName: "",
    todoDescription: "",
    task: {nested object},
    isComplete: checkbox,
    */

    return {
        todoName: name,
        todoDescription: "",
        tasks: [],
        isComplete: false,
        id: uuid()
    }


}

export default createTodo;