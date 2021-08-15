import { createSelector, createSlice } from '@reduxjs/toolkit'
import { IMessages } from '../data/messages';
import { RootState } from './store';

interface MessagesState {
    messages: IMessages,
}

const initialState: MessagesState = {
    messages: [],
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMessages: (state, action) => {
            state.messages = [ ...state.messages, action.payload];
        },
    },
})

export const { setMessages } = messagesSlice.actions

export const getMessagesState = (state: RootState) => state.chatMessages;
export const selectMessages = createSelector(getMessagesState, ({ messages }) => messages)

export default messagesSlice.reducer
