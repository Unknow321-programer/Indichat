import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import './RightChatBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faMicrophone, faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const RightChatBox = ({setMessages}) => {

    const [text, setText] = useState("");
    const [pickerShow, setPickerShow] = useState(false);

    const handlePicker = () => {
        setPickerShow(!pickerShow);
    }

    const handleEmoji = (emo) => {
        const position = document.getElementById("myText").selectionStart;
        const beginText = text.slice(0,position);
        const endText = text.slice(position);
        setText(beginText+emo.native+endText);
    }

    const handleTextAndEmoji = (event) => {
        let myText = event.target.value;
        setText(myText);
    }
    
    const handleMessages = () => {
        const myMessage = {
            id: setMessages.length+1,
            className: "self-chat",
            mess: text
        }
        setMessages((preMes) => [... preMes, myMessage])
        setText("");
    }
    const handleKeys = (e) => {
        if(e.keyCode === 13) {
            handleMessages();
        }
    }

    return (
        <>
            <div className='bottom-container'>
                    {pickerShow && <Picker data={data} onEmojiSelect={handleEmoji} 
                    style={{ width: "350px", height: "400px", backgroundColor: "#222", borderRadius: "12px" }}/>}
                <div className='bottom-view'>
                    <FontAwesomeIcon icon={faFaceSmile} className='fafont' onClick={handlePicker}/>
                    <FontAwesomeIcon icon={faPaperclip} className='fafont'/>
                    <textarea id='myText' placeholder='Type....' rows={1} className='chattext' onChange={handleTextAndEmoji} onKeyDown={handleKeys} value={text}/>
                    <FontAwesomeIcon icon={faPaperPlane} className='fafont' onClick={handleMessages}/>
                    <FontAwesomeIcon icon={faMicrophone} className='fafont'/>
                </div>
            </div>
        </>
    );
}

export default RightChatBox;