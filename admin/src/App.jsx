import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import Addproduct from './pages/Addproduct/addproduct'
import Addstaff from './pages/Addstaff/addstaff'
import Addshop from './pages/Addshop/adddshop'
import Listproduct from './pages/ListProduct/listproduct'
import Managestock from './pages/Managestock/managestock'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () =>{
  return(
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          <Route path= "/addproduct" element = {<Addproduct/>}/>
          <Route path= "/addstaff" element = {<Addstaff/>}/>
          <Route path= "/addshop" element = {<Addshop/>}/>
          <Route path= "/ListProduct" element = {<Listproduct/>}/>
          <Route path= "/Managestock" element = {<Managestock/>}/>
        </Routes>
      </div>
    </div>
  )
}
export default App