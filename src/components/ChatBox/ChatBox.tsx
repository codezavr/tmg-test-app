import React, { ChangeEvent, useState } from 'react';
import { ChatBoxMessage } from '../ChatBoxMessage/ChatBoxMessage';
import styles from './ChatBox.module.sass'
import { IMessages, IMessage } from '../../data/messages';
import { ERRORS, IError } from '../../data/errors';
import { useChatStore } from '../../hooks/useChatStore';
import { IUser } from '../../data/user';

type ChatBoxProps = {
    activeUser: IUser;
    activeUserMessages: IMessages;
}

function ChatBox({
                     activeUser,
                     activeUserMessages
                 }: ChatBoxProps) {

    const {
        addActiveUserMessage,
        setActiveUserError
    } = useChatStore();

    const [message, setMessage] = useState<IMessage>();

    function changeMessage(event: ChangeEvent<HTMLTextAreaElement>) {
        setMessage({ userId: activeUser.userId, message: event.target.value });
    }

    function saveMessage() {
        if (message && activeUser.userId) {
            addActiveUserMessage(message);
        }

        if (!activeUser.userId) {
            const error = ERRORS.find((error: IError) => error.id === 1);
            setActiveUserError(error ? error : null);
        }
    }

    return (
        <div className={ styles.ChatBox }>
            <div className={ styles.ChatBoxWrapper }>
                {
                    activeUserMessages.map((message: IMessage, index: number) => (
                        <ChatBoxMessage user={ activeUser } message={ message } key={ index }/>
                    ))
                }
            </div>
            <div className={ styles.ChatBoxInputContainer }>
                <textarea cols={ 30 } rows={ 2 } placeholder="Enter your message" defaultValue={ message?.message }
                          onChange={ (event: ChangeEvent<HTMLTextAreaElement>) => changeMessage(event) }/>
                <button type="button" onClick={ () => saveMessage() }>Send</button>
            </div>
        </div>
    )
}

export default ChatBox;
