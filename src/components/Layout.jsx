import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Layout.css";
import Name from "./Name";
import Chart from "./Chart";
import Pending from "./Pending";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
      
  const [result,setResult]=useState(null)
  const location = useLocation()

  useEffect(()=>{
    setResult(null)
  },[location])

  const searchbar = (r)=>{
      setResult(r)
      console.log(r)
  }
  return (
    <div className="main">
      <Navbar newt={searchbar} />
      <div className="sub1">
        <Sidebar />
        <div className="sub2">
          <Name />
          <div className="sub3" id="result-container">
            {/* {result ? (result.map((item)=>{ return(<div key={item.id} >
        <div className="cards">
        <div className="carditems1">{item.itemcategory}</div>
        <div className="carditem2"><p>{item.itemdetails}</p></div>
        <div className="carditem3">{item.MentionDate}</div>
        <div><input type='checkbox' className="cardbtn"></input>Completed</div>
        </div>
        </div>              
       )
      })):(children)} */}
      {children}
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
