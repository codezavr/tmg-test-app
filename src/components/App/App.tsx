import React from 'react';
import styles from './App.module.sass'
import NameChanger from '../NameChanger/NameChanger';
import GlobalError from '../GlobalError/GlobalError';
import ChatBox from '../ChatBox/ChatBox';
import { useChatStore } from '../../hooks/useChatStore';

function App() {
    const {
        getActiveUser,
        getActiveUserMessages,
        getActiveUserError
    } = useChatStore();

    return (
        <div className={ styles.App }>
            <NameChanger activeUser={ getActiveUser }/>
            { getActiveUserError && <GlobalError error={ getActiveUserError }/> }
            <ChatBox activeUser={ getActiveUser }
                     activeUserMessages={ getActiveUserMessages }
            />
        </div>
    );
}

export default App;
