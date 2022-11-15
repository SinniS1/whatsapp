import React, { useState, useEffect } from "react";
import db from "../../firebaseConfig";
import "./Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import Status from "@mui/icons-material/DonutLarge";
import Chats from "@mui/icons-material/Chat";
import Menu from "@mui/icons-material/MoreVert";
import Search from "@mui/icons-material/SearchOutlined";
import SidebarChat from "./SidebarChat/SidebarChat.js";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  
  const fetchData = async () => {
    const response = db.collection("rooms");
    const data = await response.get();
    setRooms(
      data.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <Status />
          </IconButton>
          <IconButton>
            <Chats />
          </IconButton>
          <IconButton>
            <Menu />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__search__container">
          <Search className="sidebar__searchSearch" />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => {
          return <SidebarChat key={room.id} id={room.id} name={room.data.name} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
