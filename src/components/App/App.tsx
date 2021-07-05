import React, { useCallback, useState } from 'react';
import './App.sass'
import NameChanger from '../NameChanger/NameChanger';
import { IMessage, IUser, LOGGED_USER, MESSAGES } from '../../data/messages';
import GlobalError from '../GlobalError/GlobalError';
import { IError } from '../../data/errors';
import ChatBox from '../ChatBox/ChatBox';

function App() {

    const [messages, setMessages] = useState<IMessage[]>(MESSAGES);
    const [loggedUser, setLoggedUser] = useState<IUser>(LOGGED_USER);
    const [error, setError] = useState<IError>();

    const pushMessage = useCallback((message: string) => {
        if (loggedUser.name) {
            const localMessages = [...messages, {
                name: loggedUser.name,
                message: message
            }];
            setMessages(localMessages)
        }
    }, [loggedUser.name, messages]);

    const changeUserNameForMessages = useCallback((userName: string) => {
        if (userName) {
            const localMessages = messages.map((message: IMessage) => ({ ...message, name: userName }));
            setMessages(localMessages);
        }
    }, [messages]);

    return (
        <div className="App">
            <NameChanger loggedUser={ loggedUser } setLoggedUser={ setLoggedUser } setError={ setError }
                         changeUserForMessages={ changeUserNameForMessages }/>
            { error && <GlobalError error={ error }/> }
            <ChatBox loggedUser={ loggedUser } messages={ messages } pushMessage={ pushMessage } setError={ setError }/>
        </div>
    );
}

export default App;
