import {ADD_TODO, TOGGLE_COMPLETED} from '../actions'

const initialState = {
    todos: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { task: action.payload, taskStatus: false, id: Date.now() }
                ]
            }

        case TOGGLE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            taskStatus: !todo.taskStatus
                        }
                    } else {
                        return todo
                    }
                })
            };
        default:
            return state;
    };
};

export default reducer;