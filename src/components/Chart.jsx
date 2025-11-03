import React, { useEffect, useState } from 'react'
import "./Chart.css"
import axios from 'axios'
import { PieChart,Pie,Cell,Legend,Tooltip,ResponsiveContainer } from 'recharts'

const Chart = () => {

  const [chartdata,setChartdata] = useState({completetask:0,pendingtask:0})

  const completed = [
    {name:"Completed",value:chartdata.completetask},
    {name:"Remaining",value:chartdata.pendingtask},
  ]

  const pending = [
    {name:"Pending",value:chartdata.pendingtask},
    {name:"Remaing",value:chartdata.completetask}
  ]

   const COLORS = ["#4CAF50", "#FF9800", "#E0E0E0"];

  useEffect(()=>{
       const apiurl= import.meta.env.VITE_API_URL
       axios.get(`${apiurl}/api/user/chart`)
          .then((res)=>{setChartdata(res.data.data)})
          .catch((err)=>{console.log(err)})
  },[chartdata])
 
  

  return (
    <>
    <div className='chartalign'>
      <div className='chartitem'>
   <ResponsiveContainer width="50%" height={100}>
      <PieChart>
        <Pie
          data={completed}
          cx="50%"
          cy="70%"
          startAngle={180}
          endAngle={0}
          innerRadius='60%'
          outerRadius='100%'
          dataKey='value'
        >
         <Cell fill={COLORS[0]}/>
          <Cell fill={COLORS[2]}/>
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    <p style={{ fontSize: "18px",  color: COLORS[0] }}>
          {chartdata.completetask} Completed
        </p>
    </div>
    <div className='chartitem'>
    <ResponsiveContainer width="50%" height={100}>
      <PieChart>
        <Pie
          data={pending}
          cx="50%"
          cy="70%"
          startAngle={180}
          endAngle={0}
          innerRadius='60%'
          outerRadius='100%'
          dataKey='value'
        >
         <Cell fill={COLORS[1]}/>
          <Cell fill={COLORS[2]}/>
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    <p style={{ fontSize: "18px",  color: COLORS[1] }}>
          {chartdata.pendingtask} Pending
        </p>
    </div>
    <div className='complete'>
    <div><b>TOTAL TASKS</b></div>
    <div className='total'>{chartdata.completetask + chartdata.pendingtask}</div>
    </div>
    </div>
  </>
  )
}

export default Chart