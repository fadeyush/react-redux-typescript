import { Dispatch } from "react"
import { TodoAction, TodosActionTypes } from "../../types/todo"
import axios from "axios";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch:Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodosActionTypes.FETCH_TODOS});

            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _limit: limit,
                    _page: page
                }
            });
            dispatch({type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({type: TodosActionTypes.FETCH_TODOS_ERROR, payload: 'Произошла ошибка при загрузке списка дел'});
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {type: TodosActionTypes.SET_TODO_PAGE, payload: page}
}