import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

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

  const [lastMsg, setLastMsg] = useState("");
  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setLastMsg(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [id]);

  return !addNewChat ? (
    <Link className="link" to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${name}.svg`} />
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p className="lastMsg">{lastMsg[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Create New Room</h2>
      <AddIcon fontSize="large" />
    </div>
  );
};

export default SidebarChat;
