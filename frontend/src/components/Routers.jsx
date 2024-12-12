import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home, Dashboard,ItemPage, Cart, Orders, Profile, Settings, PrivateRoute, NotFound, Fashion, Electronics, Computers, Gaming, Books, Sports, Grocery, Health ,Voucher,Services,BesSellers,GiftIdea,NewRelease,Dealoftheday,AllCategory,SearchResult} from '../pages/GlobalPage'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'

function Routers() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user' element={null}>
          {/* Dashboard belong to my account */}
          <Route path='dashboard' element={<PrivateRoute Component={Dashboard} />}></Route>
          <Route path='carts' element={<PrivateRoute Component={Cart}/>}></Route>
          <Route path='orders' element={<PrivateRoute Component={Orders}/>}></Route>
          <Route path='profile' element={<PrivateRoute Component={Profile}/>}></Route>
        </Route>
        <Route path='/all-categories' element={<AllCategory/>}></Route>
        <Route path='/category' element={null}>
          <Route path='fashion' element={<Fashion />}></Route>
          <Route path='electronics' element={<Electronics />}></Route>
          <Route path='computers-and-office' element={<Computers />}></Route>
          <Route path='gaming' element={<Gaming />}></Route>
          <Route path='books' element={<Books />}></Route>
          <Route path='sports-and-outdoors' element={<Sports />}></Route>
          <Route path='food-and-grocery' element={<Grocery />}></Route>
          <Route path='health-and-beauty' element={<Health />}></Route>
        </Route>
        <Route path='/item/:url' element={<ItemPage/>}></Route>
        <Route path='/settings' element={<Settings/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/voucher' element={<Voucher/>}></Route>
        <Route path='/best-sellers' element={<BesSellers/>}></Route>
        <Route path='/gift-idea' element={<GiftIdea/>}></Route>
        <Route path='/new-release' element={<NewRelease/>}></Route>
        <Route path='/deal-of-the-day' element={<Dealoftheday/>}></Route>
        <Route path='/search-results' element={<SearchResult/>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Routers