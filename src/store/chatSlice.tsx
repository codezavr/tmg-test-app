import { createSelector, createSlice } from '@reduxjs/toolkit'
import { IMessages, IUser } from '../data/messages';
import { RootState } from './store';
import { IError } from '../data/errors';

interface ChatState {
    activeUser: IUser,
    activeUserMessages: IMessages,
    activeUserError: IError | null
}

const initialState: ChatState = {
    activeUser: {
        name: ''
    },
    activeUserMessages: [],
    activeUserError: null
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.activeUser = action.payload;
        },
        setActiveUserMessages: (state, action) => {
            state.activeUserMessages = [ ...state.activeUserMessages, action.payload];
        },
        setActiveUserError: (state, action) => {
            state.activeUserError = action.payload;
        },
    },
})

export const { setActiveUser, setActiveUserMessages, setActiveUserError } = chatSlice.actions

export const getChatState = (state: RootState) => state.chat;
export const selectActiveUser = createSelector(getChatState, ({ activeUser }) => activeUser)
export const selectActiveUserMessages = createSelector(getChatState, ({ activeUserMessages }) => activeUserMessages)
export const selectActiveUserError = createSelector(getChatState, ({ activeUserError }) => activeUserError)

export default chatSlice.reducer
