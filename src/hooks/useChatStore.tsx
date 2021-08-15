import { useAppDispatch } from '../store/store';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { IMessage } from '../data/messages';
import { IError } from '../data/errors';
import { selectUser, setUser } from '../store/userSlice';
import { selectMessages, setMessages } from '../store/messagesSlice';
import { selectError, setError } from '../store/errorSlice';
import { IUser } from '../data/user';

export const useChatStore = () => {
    const dispatch = useAppDispatch();


    const setActiveUser = useCallback(
        (activeUser: IUser) => dispatch(
            setUser(activeUser)
        ),
        [dispatch]
    );

    const addActiveUserMessage = useCallback(
        (activeUserMessage: IMessage) => dispatch(
            setMessages(activeUserMessage)
        ),
        [dispatch]
    );

    const setActiveUserError = useCallback(
        (activeUserMessages: IError | null) => dispatch(
            setError(activeUserMessages)
        ),
        [dispatch]
    );

    return {
        setActiveUser,
        addActiveUserMessage,
        setActiveUserError,
        activeUser: useSelector(selectUser),
        activeUserMessages: useSelector(selectMessages),
        activeUserError: useSelector(selectError),
    };
};
