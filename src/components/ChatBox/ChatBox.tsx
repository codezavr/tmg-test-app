import React, { ChangeEvent, useState } from 'react';
import { ChatBoxMessage } from '../ChatBoxMessage/ChatBoxMessage';
import styles from './ChatBox.module.sass'
import { IUser, IMessages } from '../../data/messages';
import { ERRORS, IError } from '../../data/errors';
import { useChatStore } from '../../hooks/useChatStore';

type ChatBoxProps = {
    activeUser: IUser;
    activeUserMessages: IMessages;
}

function ChatBox({
                     activeUser,
                     activeUserMessages
                 }: ChatBoxProps) {

    const {
        dispatchAddActiveUserMessage,
        dispatchSetActiveUserError
    } = useChatStore();

    const [message, setMessage] = useState<string>('');

    function changeMessage(event: ChangeEvent<HTMLTextAreaElement>) {
        setMessage(event.target.value);
    }

    function saveMessage() {
        if (message && activeUser.name) {
            dispatchAddActiveUserMessage(message);
        }

        if (!activeUser.name) {
            const error = ERRORS.find((error: IError) => error.id === 1);
            dispatchSetActiveUserError(error);
        }
    }

    return (
        <div className={ styles.ChatBox }>
            <div className={ styles.ChatBoxWrapper }>
                {
                    activeUserMessages.map((message: string, index: number) => (
                        <ChatBoxMessage userName={ activeUser.name } message={ message } key={ index }/>
                    ))
                }
            </div>
            <div className={ styles.ChatBoxInputContainer }>
                <textarea cols={ 30 } rows={ 2 } placeholder="Enter your message" defaultValue={ message }
                          onChange={ (event: ChangeEvent<HTMLTextAreaElement>) => changeMessage(event) }/>
                <button type="button" onClick={ () => saveMessage() }>Send</button>
            </div>
        </div>
    )
}

export default ChatBox;
