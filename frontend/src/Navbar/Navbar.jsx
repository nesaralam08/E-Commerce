import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from 'react-router-dom'
import { TiDocumentText } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { useAuth0 } from '@auth0/auth0-react'
import ResponsiveMenu from './ResponsiveMenu';
// import MenuLeft from './MenuLeft';
import CategoryMenu from './CategoryMenu';
import CartPage from './CartPage';
const navLinks = [
  {
    name: "Best Sellers",
    path: "#"
  },
  {
    name: "Gift Ideas",
    path: "#"
  },
  {
    name: "Gift Card",
    path: "#"
  },
  {
    name: "Deal of the day",
    path: "#"
  },
]
function Navbar() {
  const { user, isAuthenticated, loginWithPopup, logout, isLoading } = useAuth0();
  const [open, setOpen] = useState(null)
  // const [opencategory, setOpencategory] = useState(false)
  // const [opencart, setOpenCart] = useState(false)
  return (
    <>
      <div className='overflow-x-hidden'>
        <nav>
          <div className='container flex justify-between items-center py-8'>
            <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
              <FiShoppingBag />
              <p className='text-[18px] md:text-[24px]'>Alam</p>
              <p className='text-primary text-[18px] md:text-[24px]'>Bazaar</p>
            </div>
            <div className='hidden md:block'>

              <ul className='flex items-center gap-6 text-gray-600'>
                <li>
                  <button className='flex items-center px-6 py-2 gap-2 bg-base-200 hover:bg-base-300 font-semibold' onClick={() => setOpen("category")}>
                    <span><TiDocumentText className='text-2xl' /></span>
                    All Categories
                    <span><IoIosArrowDown className='text-2xl' /></span>
                  </button>
                </li>
                {
                  navLinks.map((i, index) => (
                    <li key={index} className='font-semibold hover:text-primary'><NavLink to={i.path}>{i.name}</NavLink></li>
                  ))
                }
              </ul>
            </div>
            <div className='flex items-center gap-4 md:gap-6'>
              <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2' to="/" >
                <CiSearch />
              </button>
              {
                isAuthenticated ?
                  <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2' onClick={() => setOpen("cart")}>
                    <PiShoppingCartThin />
                  </button>
                  :
                  <button className='hover:bg-primary text-primary font-semibold hover:text-white rounded-sm border-2 border-primary px-3 py-[2px] duration-200 md:hidden' onClick={() => loginWithPopup()}>
                    {
                      isLoading ? <span>wait..</span> : <span>Log In</span>
                    }
                  </button>
              }

              {
                isAuthenticated ? <div className="avatar hidden md:block">
                  <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">

                    <button onClick={() => setOpen("menu")}>
                      <img src={user.picture} />
                    </button>
                  </div>
                </div> : <button className='hover:bg-primary text-primary font-semibold hover:text-white rounded-sm border-2 border-primary px-6 py-2 duration-200 hidden md:block' onClick={() => loginWithPopup()}>
                  {
                    isLoading ? <span className="loading loading-spinner loading-sm"></span> : <span>Log In</span>
                  }
                </button>
              }

            </div>
            <div className='md:hidden' onClick={() => setOpen("menu")}>
              <MdMenu className='text-4xl' />
            </div>
          </div>
        </nav>
        <div className='md:hidden h-8 -mt-6 mx-4 py-6 items-center flex justify-center border hover:bg-base-200'>
          <button className='flex items-center px-6 gap-2 font-semibold' onClick={()=>setOpen("category")}>
            <span><TiDocumentText className='text-2xl' /></span>
            All Categories
            <span><IoIosArrowDown className='text-2xl' /></span>
          </button>
        </div>
      </div>
      {/* <ResponsiveMenu open={open} />
      <CategoryMenu open={opencategory}/>
      <CartPage open={opencart} /> */}
    {
      open==="category" && <CategoryMenu onClose={()=>setOpen(null)}/>
    }
    {
      open=="cart" && <CartPage onClose={()=>setOpen(null)}/>
    }
    {
      open==="menu" && <ResponsiveMenu onClose={()=>setOpen(null)}/>
    }

    </>
  )
}

export default Navbar



