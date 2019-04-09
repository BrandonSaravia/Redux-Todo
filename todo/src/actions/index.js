export const ADD_TODO = 'ADD_TODO';
export const addTodo = newTask => {
    console.log(newTask);
    return {
        type: ADD_TODO,
        payload: newTask
    };
}


export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const toggleCompleted = id => {
    console.log(id);
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    }
}