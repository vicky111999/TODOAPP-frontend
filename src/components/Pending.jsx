import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Pending = () => {
  
  const[tasks,setTasks]=useState("")
  const[task,setTask]=useState("")
  const Navigate = useNavigate()

  useEffect(()=>{
      const apiurl= import.meta.env.VITE_API_URL
      axios.get(`${apiurl}/api/user/pending`)
          .then((res)=>{setTasks(res.data.data)})
          .catch((err)=>{console.log(err.toString())})
  },[tasks])

   const handleedit =(item)=>{

      Navigate ("/Addtask",{state:{item}})
    }
    const handledelete =(id)=>{
         const apiurl= import.meta.env.VITE_API_URL
    axios.delete(`${apiurl}/api/user/delete/${id}`)
          .then((res)=>setTask(res.data),toast.success("Task deleted successfully! 🗑️"))
          .catch((err)=>console.log(err))
    }
    const handlecomplete = (id, newstatus)=>{

     const apiurl= import.meta.env.VITE_API_URL
      axios.patch(`${apiurl}/api/user/status/${id}`,{completed:newstatus})
       .then((res)=>setTask(res.data.data),toast.success(newstatus ? "Task completed successfully! ✅" :  "Task uncompleted! ❌"))
       .catch((err)=>console.log(err))
    }

  return (
   <>
      <div className="main">
      <h1 id='up'>OUTDATED TASKS</h1>
      <div className='contentpending'>
        {tasks.length===0 ? ("No Tasks"):
      (tasks.map((item)=>{
       return(<div key={item.id} >
        <div className="card">
        <div className="carditem1">{item.itemcategory}</div>
        <div className="carditem2"><p>{item.itemdetails}</p></div>
        <div className="carditem3">{item.MentionDate}</div>
        <div><input type='checkbox' className="cardbtn" checked= {item.completed}onChange={(e)=>handlecomplete(item._id,e.target.checked)}></input>Completed</div>
        <button onClick={()=>handleedit(item)}>✏️</button><button onClick={()=>handledelete(item._id)}>🗑️</button>
        </div>
        </div>              
       )
      }))}
      </div>
      </div>
   </>
  )
}

export default Pending