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
import { Link, NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const Navigate = useNavigate()

  const logout =()=>{
    Navigate("/login")
  }
  return (
    <>
      <div className="sidebar-container">
        <img src={pic} alt="" />
        <div className="items">
          <ul>
            <li >
              <NavLink to="/" className="navlink"><IoHome /> Home</NavLink>
            </li>
            <li>
             <NavLink to="/Alltask" className="navlink"><FaTasks /> All Task</NavLink> 
            </li>
            <li>
              <NavLink to="/Completedtask" className="navlink"><GoTasklist />Completed Task</NavLink>
            </li>
            <li>
              <NavLink to="/Pendingtask" className="navlink"><IoMdSettings />Pending Task</NavLink>
            </li>
            <li>
              <NavLink to="/Help" className="navlink"><MdHelp /> Help</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
