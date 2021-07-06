import React from 'react';
import styles from './ChatBoxMessage.module.sass'

type ChatBoxMessageProps = {
    userName: string;
    message: string;
}

export function ChatBoxMessage({ userName, message }: ChatBoxMessageProps) {
    return (
        <>
            <div className={ styles.ChatBoxMessageContainer }>
                <span className={ styles.MessageUser }>
                    { userName }
                </span>
                <span className={ styles.MessageText }>
                    { message }
                </span>
            </div>
        </>
    )
}
