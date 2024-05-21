import React from 'react';
import './index.css' ;
import Navbar from './components/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home  from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders';

function App() {

  return (

    <>
    <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>
        </Routes>

      </div>
      <Footer/>
    </>
      
      
  );
}

export default App;