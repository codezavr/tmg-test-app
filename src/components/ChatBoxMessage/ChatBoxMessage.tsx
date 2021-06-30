import React from 'react';
import './ChantBoxMessage.sass'
import { IMessage } from '../../data/messages';

export function ChantBoxMessage({ message }: { message: IMessage }) {
    return (
        <>
            <div className="ChatBoxMessageContainer">
                <span className="MessageUser">
                    { message.name }
                </span>
                <span className="MessageText">
                    { message.message }
                </span>
            </div>
        </>
    )
}
