import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Pending = () => {
  
  const[tasks,setTasks]=useState("")

  useEffect(()=>{

      const apiurl= import.meta.env.VITE_API_URL
      axios.get(`${apiurl}/pending`)
          .then((res)=>{setTasks(res.data.data)})
          .catch((err)=>{console.log(err.toString())})
  },[])
  return (
   <>
      <div className="main">
      <h1 id='up'>PENDING TASKS</h1>
        {tasks.length===0 ? ("No Tasks"):
      (tasks.map((item)=>{
       return(<div key={item.id} >
        <div className="card">
        <div className="carditem1">{item.itemcategory}</div>
        <div className="carditem2"><p>{item.itemdetails}</p></div>
        <div className="carditem3">{item.MentionDate}</div>
        <div><input type='checkbox' class="cardbtn"></input>Completed</div>
        </div>
        </div>              
       )
      }))}
      </div>
   </>
  )
}

export default Pending