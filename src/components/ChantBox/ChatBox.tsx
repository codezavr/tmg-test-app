import React, { useState } from 'react';
import { ChantBoxMessage } from '../ChatBoxMessage/ChatBoxMessage';
import './ChatBox.sass'
import { IUser, IMessage } from '../../data/messages';
import { ERRORS, IError } from '../../data/errors';

function ChatBox({
                     loggedUser,
                     messages,
                     pushMessage,
                     setError
                 }: { loggedUser: IUser, messages: IMessage[], pushMessage: any, setError: any }) {

    const [message, setMessage] = useState('');

    function changeMessage(event: any) {
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
                        <ChantBoxMessage message={ localMessage } key={ index }/>
                    ))
                }
            </div>
            <div className="ChatBoxInputContainer">
                <textarea cols={ 30 } rows={ 2 } placeholder="Enter your message" defaultValue={ message }
                          onChange={ (event: any) => changeMessage(event) }/>
                <button type="button" onClick={ () => saveMessage(message) }>Send</button>
            </div>
        </div>
    )
}

export default ChatBox;
