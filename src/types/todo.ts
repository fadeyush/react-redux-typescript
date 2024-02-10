export enum TodosActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS= 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

interface FetchTodosAction {
    type: TodosActionTypes.FETCH_TODOS;
}

interface FetchTodosSuccessAction {
    type: TodosActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[]
}

interface FetchTodosErrorAction {
    type: TodosActionTypes.FETCH_TODOS_ERROR;
    payload: string
}

interface SetTodoPage {
    type: TodosActionTypes.SET_TODO_PAGE;
    payload: number;
}

export type TodoAction = FetchTodosAction | FetchTodosSuccessAction | FetchTodosErrorAction | SetTodoPage;