import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Chat.css";

import { Avatar, IconButton } from "@mui/material";
import Search from "@mui/icons-material/SearchOutlined";
import Menu from "@mui/icons-material/MoreVert";
import File from "@mui/icons-material/AttachFile";
import Smily from "@mui/icons-material/EmojiEmotionsOutlined";
import Mike from "@mui/icons-material/KeyboardVoice";
import Send from "@mui/icons-material/Send";
import db from "../../firebaseConfig";
import firebase from "firebase/compat/app";
import { useStateValue } from "../../StateProvider";

function Chat() {
  const { roomId } = useParams();
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input, // -> from input field
      name: user.displayName, // -> from google auth
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // from firebase server
    });
    setInput("");
  };

  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${roomName}.svg`} />
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>
            Last seen at ...
            {new Date(new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()).toLocaleString(undefined, {
              timeZone: "Asia/Kolkata",
            })}
          </p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <Search sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <File sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <Menu sx={{ color: "white" }} />
          </IconButton>
        </div>
      </div>

      {/* Chat body */}

      <div className="chat_body">
        {messages.map((message) => (
          <div key={Math.random() * 50000000000} className={`chat_message ${message.name === user.displayName && "chat_receiver"}`}>
            <div className="chat_name">{message.name}</div>
            <div className="msg">{message.message}</div>
            <div className="time">
              <span className="chat_messageTime">
                {new Date(new Date(message.timestamp?.toDate()).toUTCString()).toLocaleString(undefined, { timeZone: "Asia/Kolkata" })}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Footer */}
      <div className="chat_footer">
        <IconButton>
          <Smily sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <File className="file" sx={{ color: "white" }} />
        </IconButton>

        <form className="form">
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter your message..." />
          <button type="submit" onClick={sendMessage}>
            <Send />
          </button>
        </form>
        <IconButton>
          <Mike sx={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
