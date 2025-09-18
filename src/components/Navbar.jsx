import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
const Navbar = ({onSearch}) => {
  const [currentdate, setCurrentdate] = useState(new Date());
  const [searches,setSearches]=useState("")
  const [success,setSuccess] = useState("")
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentdate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const searcher =(e)=>{
    e.preventDefault()
    const task={title:searches}
    axios.get("http://localhost:3002/api/user/categories",{params:task})
        .then((res)=>{setSuccess(res.data.data)})
        .catch((err)=>{console.log(err)})
  
        onSearch(success)
  
      }

  return (
    <>
      <nav>
        <div className="container">
          <div id="logo">
            <BiTask />
            <h1>Dash</h1>

            <h1 id="board">Board</h1>
          </div>
          <div id="search">
            <input type="text" value={searches} placeholder="Search by Date or Categories" onChange={(e)=>setSearches(e.target.value)}></input>
            <button onClick={(e)=>searcher(e)}> 
              <CiSearch />
            </button>
          </div>
          <div className="date">
            <div id="datecolor">
              {currentdate.toLocaleDateString('en-Us',{weekday:"long"})}
            </div>
            {currentdate.toLocaleString()}
          </div>
        </div>
       
      </nav>
    </>
  );
};

export default Navbar;
