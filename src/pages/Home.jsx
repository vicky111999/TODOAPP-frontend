import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './Home.css'

const Home = () => {
  const [tasks,setTasks]=useState([])

  
  useEffect(()=>{
    axios.get("http://localhost:3002/api/user")
          .then((res)=>{setTasks(res.data.data)})
          .catch((err)=>{console.log(err)})
  },[])
  return (
    <>
    <div >
      <h1>UPCOMING TASKS</h1>
      {tasks.map((item)=>{
       return(<div key={item.id} >
        <div class="card">
        <div class="carditem1">{item.itemcategory}</div>
        <div class="carditem2">{item.itemdetails}</div>
        <div class="carditem3">{item.MentionDate}</div>
        <div><input type='checkbox' class="cardbtn"></input>Completed</div>
        </div>
        </div>              
       )
      })}
      </div>
    </>

  )
}

export default Home