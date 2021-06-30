import React, { useEffect, useState } from 'react';
import './App.sass'
import ChatBox from '../ChantBox/ChatBox';
import NameChanger from '../NameChanger/NameChanger';
import { IMessage, IUser, LOGGED_USER, MESSAGES } from '../../data/messages';
import GlobalError from '../GlobalError/GlobalError';
import { IError } from '../../data/errors';

function App() {

    const [messages, setMessages] = useState<IMessage[]>(MESSAGES);
    const [loggedUser, setLoggedUser] = useState<IUser>(LOGGED_USER);
    const [error, setError] = useState<IError | null>();

    const pushMessage = (message: string) => {
        const localMessages = [...messages, {
            name: loggedUser.name,
            message: message
        }];
        setMessages(localMessages)
    }

    useEffect(() => {
        if (loggedUser.name) {
            const localMessages = messages.map((message: IMessage) => ({ ...message, name: loggedUser.name }));
            setMessages(localMessages);
        }
    }, [loggedUser, messages]);

    return (
        <div className="App">
            <NameChanger loggedUser={ loggedUser } setLoggedUser={ setLoggedUser } setError={ setError }/>
            { error && <GlobalError error={ error }/> }
            <ChatBox loggedUser={ loggedUser } messages={ messages } pushMessage={ pushMessage } setError={ setError }/>
        </div>
    );
}

export default App;
