import { useAppDispatch } from '../store/store';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectActiveUser, selectActiveUserError, selectActiveUserMessages, setActiveUser, setActiveUserError, setActiveUserMessages } from '../store/chatSlice';
import { IUser } from '../data/messages';
import { IError } from '../data/errors';

export const useChatStore = () => {
    const dispatch = useAppDispatch();


    const dispatchSetActiveUser = useCallback(
        (activeUser: IUser) => dispatch(
            setActiveUser(activeUser)
        ),
        [dispatch]
    );

    const dispatchAddActiveUserMessage = useCallback(
        (activeUserMessages: string) => dispatch(
            setActiveUserMessages(activeUserMessages)
        ),
        [dispatch]
    );

    const dispatchSetActiveUserError = useCallback(
        (activeUserMessages: IError | null) => dispatch(
            setActiveUserError(activeUserMessages)
        ),
        [dispatch]
    );

    return {
        dispatchSetActiveUser,
        dispatchAddActiveUserMessage,
        dispatchSetActiveUserError,
        getActiveUser: useSelector(selectActiveUser),
        getActiveUserMessages: useSelector(selectActiveUserMessages),
        getActiveUserError: useSelector(selectActiveUserError),
    };
};
