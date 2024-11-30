import React from 'react'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import {Home,Dashboard,Cart,Orders,Profile,Settings,PrivateRoute,NotFound,Address,Fashion,Electronics,Computers,Gaming,Books,Sports,Grocery,Health} from '../pages/GlobalPage'
import Navbar from '../Navbar/Navbar'

function Routers() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/user' element={null}>
                <Route path='dashboard' element={<PrivateRoute Component={Dashboard}/>}></Route>
                <Route path='carts' element={<Cart/>}></Route>
                <Route path='orders' element={<Orders/>}></Route>
                <Route path='profile' element={<Profile/>}></Route>
                <Route path='settings' element={<Settings/>}></Route>
                <Route path='delivery-address' element={<Address/>}></Route>
            </Route>
            <Route path='/category' element={null}>
              <Route path='fashion' element={<Fashion/>}></Route>
              <Route path='electronics' element={<Electronics/>}></Route>
              <Route path='computers-and-office' element={<Computers/>}></Route>
              <Route path='gaming' element={<Gaming/>}></Route>
              <Route path='books' element={<Books/>}></Route>
              <Route path='sports-and-outdoors' element={<Sports/>}></Route>
              <Route path='food-and-grocery' element={<Grocery/>}></Route>
              <Route path='health-and-beauty' element={<Health/>}></Route>
            </Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers