import React, { FormEvent, useRef } from 'react';
import styles from './NameChanges.module.sass'
import { useChatStore } from '../../hooks/useChatStore';
import { IUser } from '../../data/user';

type NameChangerProps = {
    activeUser: IUser;
}

function NameChanger({ activeUser }: NameChangerProps) {

    const {
        setActiveUser,
        setActiveUserError
    } = useChatStore();

    const nameInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (nameInputRef && nameInputRef.current) {
            const userName = nameInputRef.current.value;

            setActiveUser({ userName: userName });
            setActiveUserError(null);
        }
    }

    return (
        <div className={ styles.NameChanger }>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Enter your name" ref={ nameInputRef }/>
                <button type="submit">Submit</button>
            </form>
            { activeUser?.userName && <div><span className={ styles.NameTitle }>Username:</span> { activeUser?.userName }</div> }
        </div>
    )
}

export default NameChanger;
