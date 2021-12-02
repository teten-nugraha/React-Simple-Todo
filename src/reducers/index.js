import { ADD_TODO } from '../actions'

const initialState = {
    toDoList: []
}

export default function toDoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            let newTodoList = [
                ...state.toDoList,
                {
                    ...action.toDoItem
                }
            ];
        return {
            ...state,
            toDoList: newTodoList
        };
        default:
            return state;
    }
}