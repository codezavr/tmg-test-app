import React, { FormEvent, useRef } from 'react';
import { IUser } from '../../data/messages';
import './NameChanges.sass'
import { IError } from '../../data/errors';

type NameChangerProps = {
    loggedUser: IUser;
    setLoggedUser: (user: IUser) => void;
    setError: (error: IError | undefined) => void;
}

function NameChanger({ loggedUser, setLoggedUser, setError }: NameChangerProps) {

    const nameInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (nameInputRef && nameInputRef.current) {
            setLoggedUser({
                name: nameInputRef.current.value
            });
            setError(undefined)
        }
    }

    return (
        <div className="NameChanger">
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Enter your name" ref={ nameInputRef }/>
                <button type="submit">Submit</button>
            </form>
            { loggedUser?.name && <div><span className="NameTitle">Username:</span> { loggedUser?.name }</div> }
        </div>
    )
}

export default NameChanger;
