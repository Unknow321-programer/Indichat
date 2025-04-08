import React from "react";
import { useState } from "react";
const RightChatDisplay = ({displayMes=[]}) => {

    return(
        <div className="user-chat-view">
              {
                displayMes.map((mes)=>
                    <span key={mes.id} className={mes.className}>{mes.mess}</span>
                )
              }
          </div>
    )
}

export default RightChatDisplay;