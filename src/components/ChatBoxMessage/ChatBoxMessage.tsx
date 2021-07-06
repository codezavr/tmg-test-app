import React from 'react';
import './ChatBoxMessage.sass'

type ChatBoxMessageProps = {
    userName: string;
    message: string;
}

export function ChatBoxMessage({ userName, message }: ChatBoxMessageProps) {
    return (
        <>
            <div className="ChatBoxMessageContainer">
                <span className="MessageUser">
                    { userName }
                </span>
                <span className="MessageText">
                    { message }
                </span>
            </div>
        </>
    )
}
