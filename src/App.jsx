import React from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Addtask from './pages/Addtask'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import Alltask from './pages/Alltask'
import Help from './pages/Help'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
const App = () => {
  return (
    <Provider store={store}>
    <ToastContainer position='top-right' autoClose={2000}/>
    <Layout>
    <div>
    <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/Addtask" element={<Addtask/>}/>
        <Route path="/Alltask" element={<Alltask/>}></Route>
        <Route path="/Help" element={<Help/>}></Route>
    </Routes>
  </div>
    </Layout>
    </Provider>
  )
}

export default App