import React from 'react';
import styles from './ChatBoxMessage.module.sass'
import { IMessage } from '../../data/messages';
import { IUser } from '../../data/user';

type ChatBoxMessageProps = {
    user: IUser;
    message: IMessage;
}

export function ChatBoxMessage({ user, message }: ChatBoxMessageProps) {
    return (
        <>
            <div className={ styles.ChatBoxMessageContainer }>
                <span className={ styles.MessageUser }>
                    { user.userName }
                </span>
                <span className={ styles.MessageText }>
                    { message.message }
                </span>
            </div>
        </>
    )
}
