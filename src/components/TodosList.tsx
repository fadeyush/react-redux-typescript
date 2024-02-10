import { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchTodos } from '../store/action-creator/todo';
import { useActions } from '../hooks/useActions';

const TodosList: FC = () => {
    const {todos, loading, error, limit, page} = useTypedSelector(state => state.todo);
    const {fetchTodos, setTodoPage} = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(()=>{
        fetchTodos(page, limit);
    }, [page]);

    if(loading) {
        return <h1>Идет загрузка...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo=>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            <div style={{display: 'flex'}}>
                {pages.map(p=>
                    <div onClick={()=>setTodoPage(p)} key={p} style={{padding: '5px', border: page==p ? '2px solid green' : '1px solid gray' }}>{p}</div>
                )}
            </div>
        </div>
    );
};

export default TodosList;