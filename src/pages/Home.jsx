import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './Home.css'
import { MdAddTask } from "react-icons/md";
import Addtask from './Addtask';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [tasks,setTasks]=useState([])
   const Navigate=useNavigate()
  
  useEffect(()=>{
    axios.get("http://localhost:3002/api/user")
          .then((res)=>{setTasks(res.data.data)})
          .catch((err)=>{console.log(err)})
  },[])
  const clicked=()=>{
     Navigate("/Addtask")
  }
  return (
    <>
    <div className="main">
      <h1 id='up'>UPCOMING TASKS</h1>
      <button id='btn' onClick={clicked}><MdAddTask/>  ADD TASK</button>
      <div className="content">
      {tasks.map((item)=>{
       return(<div key={item.id} >
        <div className="cards">
        <div className="carditems1">{item.itemcategory}</div>
        <div className="carditem2"><p>{item.itemdetails}</p></div>
        <div className="carditem3">{item.MentionDate}</div>
        <div><input type='checkbox' className="cardbtn"></input>Completed</div>
        </div>
        </div>              
       )
      })}
      </div>
      </div>
    </>

  )
}

export default Home