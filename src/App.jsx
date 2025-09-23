import React from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Addtask from './pages/Addtask'
import { Navigate, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Layout>
    <div>
    <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/Addtask" element={<Addtask/>}/>
        {/* <Route path="/Categories" element={<Searchresult/>}></Route> */}
    </Routes>
  </div>
    </Layout>
    </>
  )
}

export default App