import React, { FormEvent, useRef } from 'react';
import { IUser } from '../../data/messages';
import styles from './NameChanges.module.sass'
import { useChatStore } from '../../hooks/useChatStore';

type NameChangerProps = {
    activeUser: IUser;
}

function NameChanger({ activeUser }: NameChangerProps) {

    const {
        dispatchSetActiveUser,
        dispatchSetActiveUserError
    } = useChatStore();

    const nameInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (nameInputRef && nameInputRef.current) {
            const userName = nameInputRef.current.value;

            dispatchSetActiveUser({ name: userName });
            dispatchSetActiveUserError(null);
        }
    }

    return (
        <div className={ styles.NameChanger }>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Enter your name" ref={ nameInputRef }/>
                <button type="submit">Submit</button>
            </form>
            { activeUser?.name && <div><span className={ styles.NameTitle }>Username:</span> { activeUser?.name }</div> }
        </div>
    )
}

export default NameChanger;
