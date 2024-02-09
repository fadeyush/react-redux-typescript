import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { UseTypedSelector } from '../hooks/UseTypedSelector';

const UserList: FC = () => {
    const {error, users, loading} = UseTypedSelector(state => state.user);
    return (
        <div>
            
        </div>
    );
};

export default UserList;