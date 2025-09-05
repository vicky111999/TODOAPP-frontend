import React from "react";
import "./Sidebar.css";
import { SidebarMenu } from "../data";
import pic from "../assets/profilepic.png";
import { IoHome } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { MdHelp } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <>
      <div class="sidebar-container">
        <img src={pic} alt="" />
        <div class="items">
          <ul>
            <li>
              <IoHome /> DashBoard
            </li>
            <li>
              <FaTasks /> All Task
            </li>
            <li>
              <GoTasklist />
              Categories
            </li>
            <li>
              <IoMdSettings /> Setting
            </li>
            <li>
              <MdHelp /> Help
            </li>
          </ul>
        </div>
        <button>
          <RiLogoutBoxRFill /> Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
