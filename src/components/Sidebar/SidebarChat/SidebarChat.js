import React, { useEffect, useState } from "react";
import "./SidebarChat.css";

import { Avatar } from "@mui/material";

const SidebarChat = ({ addNewChat }) => {
  const randomString = Math.random().toString(36).substring(2, 7);
  const [seed, setSeed] = useState("j");

  useEffect(() => {
    setSeed(randomString);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createChat = ()=>{
    const roomName = prompt("Enter your name here. . .")
    if(roomName){
      // do some clever database stuff here
    }
    else{
      alert("don't exploit this application ok..")
    }
  }


  
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>Last message ....</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
};

export default SidebarChat;
