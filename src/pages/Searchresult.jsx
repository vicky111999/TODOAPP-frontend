import React from 'react'


const Searchresult = ({task}) => {
    return (
    <>
    <div className='main'>
          <h1 id="up">SEARCH RESULTS</h1> 
          <div className='content'>   
         {task ? (task.map((item)=>{ return(<div key={item.id} >
        <div className="cards">
        <div className="carditems1">{item.itemcategory}</div>
        <div className="carditem2"><p>{item.itemdetails}</p></div>
        <div className="carditem3">{item.MentionDate}</div>
        <div><input type='checkbox' className="cardbtn"></input>Completed</div>
        {/* <div className='edit'><button>EDIT</button><button>DELETE</button></div> */}
        </div>
        </div>              
       )
      })):["NO Task Available"]}
     </div>
     </div> 
  </>
  )
}

export default Searchresult