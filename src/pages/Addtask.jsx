import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Addtask = () => {

    const [title,setTitle]=useState("")
    const [detail,setDetail]=useState("")
    const [date,setDate]=useState("")
    const [success,setSuccess]=useState("")

    const add=()=>{
        const task = {title:title,details:detail,date:date}
            axios.post("http://localhost:3002/api/user/todoAdd",task)
            .then((res)=>{setSuccess(res.data)})
            .catch((err)=>{console.log(err)})
    }

    return (
    <>
    <input type='text' value={title} placeholder='Enter Category' onChange={(e)=>setTitle(e.target.value)}></input><br></br>
    <textarea type='address' value={detail} placeholder='Enter Details' onChange={(e)=>setDetail(e.target.value)}></textarea>
    <br></br><input type='date' value={date} onChange={(e)=>setDate(e.target.value)}/>
    <br></br><button onClick={add}>Add task</button>
    <div>{success}</div>
    </>
  )
}

export default Addtask