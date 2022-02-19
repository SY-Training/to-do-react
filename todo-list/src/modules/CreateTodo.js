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
        tasks: {},
        isComplete: false
    }


}

export default createTodo;