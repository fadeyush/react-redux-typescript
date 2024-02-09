import React, { FC, useEffect } from 'react';
import { UseTypedSelector } from '../hooks/UseTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/action-creator/user';

const UserList: FC = () => {
    const {error, users, loading} = UseTypedSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])

    if(loading) {
        return <h1>Идет загрузка...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user=>
                <div key={user.id}>{user.name}</div>    
            )}
        </div>
    );
};

export default UserList;