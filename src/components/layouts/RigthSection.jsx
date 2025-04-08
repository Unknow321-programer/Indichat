import RightNavBar from './RightNavBar';
import './RigthSection.css'
import RightChatDisplay from './RightChatDisplay';

import { useState } from 'react';
import RightChatBox from './RightChatBox';

const RigthSection = () => {
    
    const [messages, setMessages] = useState([]);

    
    

    return (
        <div className="right-section">
            <RightNavBar></RightNavBar>
            <RightChatDisplay displayMes={messages}/>
            <RightChatBox setMessages={setMessages}/>

        </div>
    )
}

export default RigthSection;