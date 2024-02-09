import { UserAction, UsersActionTypes, UsersState } from "../../types/user";

const inittialState: UsersState = {
    users: [],
    loading: false,
    error: null,
}

export const userReducer = (state = inittialState, action: UserAction): UsersState => {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS:
            return { loading: true, error: null, users: [] }
        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload }
        case UsersActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, users: [] }
        default:
            return state
    }
};
