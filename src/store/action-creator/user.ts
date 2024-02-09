// import { Dispatch } from "redux";
// import { UserAction, UsersActionTypes } from "../../types/user";

// export const fetchUsers = () => {
//     return async(dispatch: Dispatch<UserAction>) => {
//         try {
//             dispatch({type: UsersActionTypes.FETCH_USERS});


//             // 'https://jsonplaceholder.typicode.com/users'
//         } catch (e) {
//             console.log(e);
//             dispatch({type: UsersActionTypes.FETCH_USERS_ERROR, payload: `Произошла ошибка при загрузке пользователей`});
//         }
//     }
// }