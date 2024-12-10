import React, { useState } from 'react'
import { PiShoppingCartThin } from "react-icons/pi";
import { FiShoppingBag } from "react-icons/fi";
import { Link, NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Sidebar from '../Navbar/Sidebar';
// import CartPage from './CartPage';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import SearchIItem from './SearchIItem';
const navLinks = [
  {
    name: "Best Sellers",
    path: "/best-sellers"
  },
  {
    name: "Gift Ideas",
    path: "/gift-idea"
  },
  {
    name: "New Releases",
    path: "/new-release"
  },
  {
    name: "Deal of the day",
    path: "/deal-of-the-day"
  },
  {
    name:"Categories",
    path:"/all-categories"
  }
]
function Navbar() {
  const { user, isAuthenticated, loginWithPopup, logout, isLoading } = useAuth0();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className='overflow-x-hidden'>
        <div className="drawer drawer-end">
          {/* Drawer toggle */}
          <input
            id="my-drawer-4"
            type="checkbox"
            className="drawer-toggle"
            checked={isDrawerOpen}
            onChange={() => setIsDrawerOpen(!isDrawerOpen)}
          />
          <nav>
            <div className='px-6 flex justify-between items-center py-4 bg-[url(./assets/header-bg.png)] bg-no-repeat bg-cover'>
              <Link className='text-2xl flex items-center gap-2 font-bold uppercase' to='/'>
                <FiShoppingBag />
                <p className='text-[18px] md:text-[20px]'>Alam</p>
                <p className='text-primary text-[18px] md:text-[20px]'>Bazaar</p>
              </Link>
              {/* menu list */}
              <div className='hidden lg:block'>
                <ul className='flex items-center lg:gap-6 text-gray-600'>
                  {
                    navLinks.map((i, index) => (
                      <li key={index} className='font-semibold text-sm lg:text-sm xl:text-md hover:text-primary'><NavLink to={i.path} className={({ isActive }) => isActive ? "text-primary" : ""}>{i.name}</NavLink></li>
                    ))
                  }
                </ul>
              </div>

              <div className='flex items-center gap-4 md:gap-6'>

                <label className="input input-bordered items-center justify-between gap-2 h-10 hidden xl:flex">
                  <SearchIItem/>
                </label>

                {/* <SearchIItem/> */}
                {
                  isAuthenticated ?
                    <Link className='text-2xl hover:bg-primary hover:text-white rounded-full p-2' to='/user/carts'>
                      <PiShoppingCartThin />
                    </Link>
                    :
                    <button className='hover:bg-primary text-primary font-semibold hover:text-white rounded-sm text-[12px] border-primary px-3 py-[2px] duration-200' onClick={() => loginWithPopup()}>
                      {
                        isLoading ? <span className="loading loading-spinner text-neutral"></span> : null
                      }
                    </button>
                }
                <div>
                  <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer">
                    <HiOutlineBars3BottomRight className='text-4xl' />
                  </label>
                </div>
              </div>
            </div>
          </nav>
          <Sidebar isDrawerOpen={isDrawerOpen} handleItemClick={() => setIsDrawerOpen(false)} />
        </div>
        <div className='xl:hidden mx-4 mb-2 mt-2 hover:bg-base-200'>

          <label className="input input-bordered flex items-center gap-2">
            <SearchIItem/>
          </label>

        </div>
      </div>

    </>
  )
}

export default Navbar



