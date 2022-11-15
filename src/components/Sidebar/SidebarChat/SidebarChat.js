import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Link } from "react-router-dom";

import { Avatar } from "@mui/material";
import db from "../../../firebaseConfig";

const SidebarChat = ({ addNewChat, name, id }) => {
  const createChat = () => {
    const roomName = prompt("Enter your name here. . .");
    if (roomName) {
      // do some clever database stuff here
      db.collection("rooms").add({
        name: roomName,
      });
    } else {
      alert("don't exploit this application ok..");
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${name}.svg`} />
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>Last message ....</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
};

export default SidebarChat;
