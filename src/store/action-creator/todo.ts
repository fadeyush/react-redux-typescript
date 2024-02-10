import { Dispatch } from "react"
import { TodoAction, TodosActionTypes } from "../../types/todo"
import axios from "axios";

export const fetchTodos = () => {
    return async (dispatch:Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodosActionTypes.FETCH_TODOS});

            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            dispatch({type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({type: TodosActionTypes.FETCH_TODOS_ERROR, payload: 'Произошла ошибка при загрузке списка дел'});
        }
    }
}