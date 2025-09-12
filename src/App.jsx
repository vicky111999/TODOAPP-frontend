import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Layout from './components/Layout'
import Home from './pages/Home'
import Addtask from './pages/Addtask'
import Searchresult from './pages/Searchresult'
import { Link, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Layout>
    <div>
    <Routes>
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