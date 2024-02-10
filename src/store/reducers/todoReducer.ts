import { TodoAction, TodoState, TodosActionTypes } from "../../types/todo";

const inittialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
}

export const todoReducer = (state = inittialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodosActionTypes.FETCH_TODOS:
            return { loading: true, error: null, todos: [] }
        case TodosActionTypes.FETCH_TODOS_SUCCESS:
            return { loading: false, error: null, todos: action.payload }
        case TodosActionTypes.FETCH_TODOS_ERROR:
            return { loading: false, error: action.payload, todos: [] }
        default:
            return state
    }
}