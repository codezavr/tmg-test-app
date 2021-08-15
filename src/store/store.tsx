import { configureStore } from '@reduxjs/toolkit'
import activeUserReducer from './userSlice';
import messagesReducer from './messagesSlice';
import errorReducer from './errorSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        chatUser: activeUserReducer,
        chatMessages: messagesReducer,
        chatError: errorReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
