import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Alltask = () => {
const [tasks,setTasks]=useState([])
const [task,setTask]=useState([])
    const Navigate=useNavigate()
      
      useEffect(()=>{
         const apiurl= import.meta.env.VITE_API_URL
        axios.get(`${apiurl}/api/user/alltask`)
              .then((res)=>{setTasks(res.data.data)})
              .catch((err)=>{console.log(err)})
      },[])
      const clicked=()=>{
         Navigate("/Addtask")
      }
    const handleedit =(item)=>{

      Navigate ("/Addtask",{state:{item}})
    }
    const handledelete =(id)=>{
         const apiurl= import.meta.env.VITE_API_URL
    axios.delete(`${apiurl}/api/user/delete/${id}`)
          .then((res)=>setTask(res.data),toast.success("Task deleted successfully! 🗑️"))
          .catch((err)=>console.log(err),toast.error("Error deleting task ❌"))
    }

    return (
    <>    
        <div className="main">
          <h1 id='up' >UPCOMING TASKS</h1>
          <div className="content">
          {tasks.map((item)=>{
           return(<div key={item.id} >
            <div className="cards">
            <div className="carditems1 ">{item.itemcategory}</div>
            <div className="carditem2"><p>{item.itemdetails}</p></div>
            <div className="carditem3">{item.MentionDate}</div>
            <div><input type='checkbox' className="cardbtn"></input>Completed</div>
            <button onClick={()=>handleedit(item)}>✏️</button><button onClick={()=>handledelete(item._id)}>🗑️</button>
            </div>
            </div>              
           )
          })}
          </div>
          </div>
    </>
  )
}

export default Alltask