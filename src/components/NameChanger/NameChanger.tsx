import React, { useRef } from 'react';
import { IUser } from '../../data/messages';
import './NameChanges.sass'

function NameChanger({ loggedUser, setLoggedUser, setError }: { loggedUser: IUser, setLoggedUser: any, setError: any }) {

    const nameInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: any) {
        event.preventDefault();
        if (nameInputRef && nameInputRef.current) {
            setLoggedUser({
                name: nameInputRef.current.value
            });
            setError(null)
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
