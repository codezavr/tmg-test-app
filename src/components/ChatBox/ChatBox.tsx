import React, { ChangeEvent, useState } from 'react';
import { ChatBoxMessage } from '../ChatBoxMessage/ChatBoxMessage';
import './ChatBox.sass'
import { IUser, IMessage } from '../../data/messages';
import { ERRORS, IError } from '../../data/errors';

type ChatBoxProps = {
    loggedUser: IUser;
    messages: IMessage[],
    pushMessage: (message: string) => void;
    setError: (error: IError | undefined) => void;
}

function ChatBox({
                     loggedUser,
                     messages,
                     pushMessage,
                     setError
                 }: ChatBoxProps) {

    const [message, setMessage] = useState('');

    function changeMessage(event: ChangeEvent<HTMLTextAreaElement>) {
        setMessage(event.target.value);
    }

    function saveMessage(message: string) {
        if (message && loggedUser.name) {
            pushMessage(message);
        }

        if (!loggedUser.name) {
            setError(ERRORS.find((error: IError) => error.id === 1))
        }
    }

    return (
        <div className="ChatBox">
            <div className="ChatBoxWrapper">
                {
                    messages.map((localMessage: IMessage, index: number) => (
                        <ChatBoxMessage message={ localMessage } key={ index }/>
                    ))
                }
            </div>
            <div className="ChatBoxInputContainer">
                <textarea cols={ 30 } rows={ 2 } placeholder="Enter your message" defaultValue={ message }
                          onChange={ (event: ChangeEvent<HTMLTextAreaElement>) => changeMessage(event) }/>
                <button type="button" onClick={ () => saveMessage(message) }>Send</button>
            </div>
        </div>
    )
}

export default ChatBox;
