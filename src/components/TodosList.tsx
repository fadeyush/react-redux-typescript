import { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchTodos } from '../store/action-creator/todo';
import { useActions } from '../hooks/useActions';

const TodosList: FC = () => {
    const {todos, loading, error} = useTypedSelector(state => state.todo);
    const {fetchTodos} = useActions();

    useEffect(()=>{
        fetchTodos();
    }, []);

    if(loading) {
        return <h1>Идет загрузка...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo=>
                <div key={todo.id}>{todo.title}</div>
            )}
        </div>
    );
};

export default TodosList;