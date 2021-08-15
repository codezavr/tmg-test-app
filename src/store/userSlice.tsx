import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store';
import { IUser } from '../data/user';

interface ActiveUserState {
    user: IUser,
}

const initialState: ActiveUserState = {
    user: {
        userId: null,
        userName: ''
    },
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user.userId ? state.user.userName = action.payload.userName : state.user = { userId: 1, userName: action.payload.userName };
        },
    },
})

export const { setUser } = UserSlice.actions

export const getActiveUserState = (state: RootState) => state.chatUser;
export const selectUser = createSelector(getActiveUserState, ({ user }) => user)

export default UserSlice.reducer
