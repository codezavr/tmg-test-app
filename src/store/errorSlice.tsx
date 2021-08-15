import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store';
import { IError } from '../data/errors';

interface ErrorState {
    error: IError | null
}

const initialState: ErrorState = {
    error: null
}

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
})

export const { setError } = errorSlice.actions

export const getErrorState = (state: RootState) => state.chatError;
export const selectError = createSelector(getErrorState, ({ error }) => error)

export default errorSlice.reducer
