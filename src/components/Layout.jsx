import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Layout.css";
import Name from "./Name";
import Chart from "./Chart";
import Pending from "./Pending";
import { useLocation, useNavigate } from "react-router-dom";
import Searchresult from "../pages/Searchresult";

const Layout = ({ children }) => {
      
  const [result,setResult]=useState(null)
  const location = useLocation()

  useEffect(()=>{
    setResult(null)
  },[location])

  const searchbar = (r)=>{
      setResult(r)
  }
  return (
    <div className="main">
      <Navbar onSearch={searchbar} />
      <div className="sub1">
        <Sidebar />
        <div className="sub2">
          <Name />
          <div className="sub3" id="result-container">
      {result ? (<Searchresult  tasksearch={result} />) :
      (children)}
            <div className="sub4">
              <Chart />
              <div className="sub5">
                <Pending />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
