import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Layout.css";
import Name from "./Name";
import Chart from "./Chart";
import Pending from "./Pending";

const Layout = ({ children }) => {
  return (
    <div class="main">
      <Navbar />
      <div class="sub1">
        <Sidebar />
        <div class="sub2">
          <Name />
          <div class="sub3">
            {children}
            <div class="sub4">
              <Chart />
              <div class="sub5">
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
