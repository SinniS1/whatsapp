import React, { useEffect, useState } from "react";

import "./Chat.css";

import { Avatar, Icon, IconButton } from "@mui/material";
import Search from "@mui/icons-material/SearchOutlined";
import Menu from "@mui/icons-material/MoreVert";
import File from "@mui/icons-material/AttachFile";
import Smily from "@mui/icons-material/EmojiEmotionsOutlined";
import Mike from "@mui/icons-material/KeyboardVoice";
import Send from "@mui/icons-material/Send";

function Chat() {
  const [seed, setSeed] = useState("j");
  useEffect(() => {
    setSeed(Math.random() * 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = () => {
    console.log(input);
  };

  const [input, setInput] = useState("");

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <File />
          </IconButton>
          <IconButton>
            <Menu />
          </IconButton>
        </div>
      </div>

      {/* Chat body */}
      <div className="chat_body">
        <div className={`chat_message ${false && "chat_receiver"}`}>
          {/* Chat name */}
          <div className="chat_name">Sender's Name </div>

          {/* chat messages */}
          {`Sender's message should apper here...`}

          <div style={{ width: "45px", height: "1px", marginRight: "0px" }}></div>

          {/* Chat time */}
          <span className="chat_messageTime">12:36 am</span>
        </div>

        {/* new message ----------------------------------------------------------------- */}

        <div className={`chat_message ${true && "chat_receiver"}`}>
          <div className="chat_name">You</div>

          {/* chat messages */}
          {`Receiver's messages should appear here...`}

          <div style={{ width: "45px", height: "1px", marginRight: "0px" }}></div>
          {/* Chat time */}
          <span className="chat_messageTime">12:36 am</span>
        </div>
      </div>

      {/* Chat Footer */}
      <div className="chat_footer">
        <IconButton>
          <Smily />
        </IconButton>
        <IconButton>
          <File className="file" />
        </IconButton>

        <form className="form">
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter your message..." />
          <button type="submit" onClick={sendMessage}>
            <Send />
          </button>
        </form>
        <IconButton>
          <Mike />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
