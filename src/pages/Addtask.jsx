import React,{ useState} from 'react'
import axios from 'axios'
import "./Addtask.css"
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Addtask = () => {

    const [title,setTitle]=useState("")
    const [detail,setDetail]=useState("")
    const [date,setDate]=useState("")
    const [success,setSuccess]=useState("")
    
    const Navigate = useNavigate()

    const add=()=>{
        const task = {title:title,details:detail,date:date}
         const apiurl= import.meta.env.VITE_API_URL
            axios.post(`${apiurl}/todoAdd`,task)
            .then((res)=>{setSuccess(res.data.data)})
            .catch((err)=>{console.log(err)})
    }

    return (
    <>
    <button id="back" onClick={()=>Navigate(-1)}><IoArrowBackCircle/>Back</button>
    <div id="card">
      <h1 id='h1'>ADD TASK</h1>
    <input type='text' id='carditem1' value={title} placeholder='Enter Category' onChange={(e)=>setTitle(e.target.value)}></input><br></br>
    <textarea type='address' id='carditem2' value={detail} placeholder='Enter Details' onChange={(e)=>setDetail(e.target.value)}></textarea>
    <br></br><input type='date' id='carditem3' value={date} onChange={(e)=>setDate(e.target.value)}/>
    <br></br><button onClick={add}>Add task</button>
    <div id='result'>{success}</div>
   </div>
    </>
  )
}

export default Addtask