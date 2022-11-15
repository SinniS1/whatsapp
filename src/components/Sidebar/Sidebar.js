import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import Status from "@mui/icons-material/DonutLarge";
import Chats from "@mui/icons-material/Chat";
import Menu from "@mui/icons-material/MoreVert";
import Search from "@mui/icons-material/SearchOutlined";
import SidebarChat from "./SidebarChat/SidebarChat.js";
const Sidebar = () => {
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
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />

        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />

        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
