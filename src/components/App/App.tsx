import React from 'react';
import styles from './App.module.sass'
import NameChanger from '../NameChanger/NameChanger';
import GlobalError from '../GlobalError/GlobalError';
import ChatBox from '../ChatBox/ChatBox';
import { useChatStore } from '../../hooks/useChatStore';

function App() {
    const {
        activeUser,
        activeUserMessages,
        activeUserError
    } = useChatStore();

    return (
        <div className={ styles.App }>
            <NameChanger activeUser={ activeUser }/>
            { activeUserError && <GlobalError error={ activeUserError }/> }
            <ChatBox activeUser={ activeUser }
                     activeUserMessages={ activeUserMessages }
            />
        </div>
    );
}

export default App;
