import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Layout from './components/Layout'
import Home from './pages/Home'
import Addtask from './pages/Addtask'

const App = () => {
  return (
    <>
    <Layout>
    <Addtask/>
    </Layout>
    
    </>
  )
}

export default App