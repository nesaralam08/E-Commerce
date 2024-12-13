import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { PiBoxArrowUpFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { IoMdWallet } from "react-icons/io";
import { MdFolderShared } from "react-icons/md";
import { MdPowerSettingsNew } from "react-icons/md";
import AxiosInstance from '../utils/AxiosInstance';
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import PageLoading from '../components/PageLoading';

// import Profile from './Profile';
function Orders() {
  const { user, isAuthenticated, logout } = useAuth0()
  const userid = localStorage.getItem("uid")
  const [userdata, setUserdata] = useState({})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    AxiosInstance.get(`/api/user/get-user?uid=${userid}`)
      .then((d) => {
        setLoading(false)
        setUserdata(d.data.result)
      })
      .catch((e) => setLoading(false))
  }, [])
  const handleLogout = () => {
    localStorage.setItem("uid", "")
    logout({ logoutParams: { returnTo: window.location.origin } })

  }
  const handleChange = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    AxiosInstance.post(`/api/user/update-user`, userdata)
      .then((d) => {
        setUserdata(d.data.result)
      })
  }
  return (
    <>
      {
        loading ? <PageLoading /> :
          <section className='bg-slate-100'>
            <div className='container grid grid-cols-1 lg:grid-cols-3 min-h-screen w-full py-5 gap-3 flex-col-reverse'>

              <div className=' w-full xl:w-[85%]'>
                {/* avatar */}
                <div className='bg-white rounded-sm h-20 shadow-md flex items-center justify-start gap-5 px-8'>
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src={userdata.picture} />
                    </div>
                  </div>
                  <div>
                    <p className='text-xs text-slate-500'>Hello,</p>
                    <h3 className='text-lg font-semibold'>{userdata.name}</h3>
                  </div>
                </div>

                {/* above lg screenn */}
                <div className='bg-white hidden lg:block rounded-sm shadow-md h-auto mt-4'>

                  <Link className='flex items-center justify-start gap-5 px-8 py-5' to="/user/orders">
                    <i className='text-2xl text-primary'><PiBoxArrowUpFill /></i>
                    <p className='text-md font-semibold text-slate-500'>MY ORDERS</p>
                  </Link>

                  <hr />
                  <div className='flex items-center justify-start gap-5 px-8 py-5'>
                    <i className='text-2xl text-primary'><FaUser /></i>
                    <p className='text-md font-semibold text-slate-500'>ACCOUNT SETTINGS</p>
                  </div>
                  <div className='flex flex-col w-full items-center justify-center'>
                    <Link className='hover:bg-[#f5faff] hover:text-primary w-full text-center py-3 text-sm' to="/user/dashboard">Profile Information</Link>
                    <Link className='hover:bg-[#F5FAFF] hover:text-primary w-full text-center py-3 text-sm' to="/user/address">Manage address</Link>
                    {/* <Link className='hover:bg-[#F5FAFF] hover:text-primary w-full text-center py-3 text-sm'>Pan card information</Link> */}
                  </div>

                  <hr />
                  <div className='flex items-center justify-start gap-5 px-8 py-5'>
                    <i className='text-2xl text-primary'><IoMdWallet /></i>
                    <p className='text-md font-semibold text-slate-500'>PAYMENTS</p>
                  </div>
                  <div className='flex flex-col w-full items-center justify-center'>
                    {/* <Link className='hover:bg-[#f5faff] hover:text-primary bg-[#f5faffdd] w-full text-center py-3 text-sm'>Gift Cards</Link> */}
                    <Link className='hover:bg-[#F5FAFF] hover:text-primary w-full text-center py-3 text-sm'>Saved UPI</Link>
                    {/* <Link className='hover:bg-[#F5FAFF] hover:text-primary w-full text-center py-3 text-sm'>Saved Cards</Link> */}
                  </div>

                  <hr />
                  <div className='flex items-center justify-start gap-5 px-8 py-5'>
                    <i className='text-2xl text-primary'><MdFolderShared /></i>
                    <p className='text-md font-semibold text-slate-500'>MY STUFF</p>
                  </div>
                  <div className='flex flex-col w-full items-center justify-center'>
                    {/* <Link className='hover:bg-[#f5faff] hover:text-primary bg-[#f5faffdd] w-full text-center py-3 text-sm'>My coupons</Link> */}
                    {/* <Link className='hover:bg-[#F5FAFF] hover:text-primary w-full text-center py-3 text-sm '>All notifications</Link> */}
                    <Link className='hover:bg-[#F5FAFF] hover:text-primary w-full text-center py-3 text-sm'>My cart</Link>
                  </div>
                  <hr />
                  <div className='bg-white rounded-sm h-20 shadow-md flex items-center justify-start gap-5 px-8'>
                    <div className="">
                      <i className='text-2xl text-primary'><MdPowerSettingsNew /></i>
                    </div>
                    <div>
                      <button className='hover:text-primary font-semibold' onClick={handleLogout}>Logout</button>
                    </div>
                  </div>
                </div>

                {/* below lg screen */}
                <div className=' lg:hidden rounded-sm h-auto mt-4 flex items-center justify-evenly'>

                  <div className='flex flex-col gap-2'>
                    <Link className='flex items-center justify-start gap-5 px-5 shadow-md rounded-md py-5' to="/user/dashboard">
                      <i className='text-2xl text-slate-500'><FaUser /></i>
                      <p className='text-md font-semibold text-slate-500'>PROFILE</p>
                    </Link>
                    <Link className='flex items-center justify-start gap-5 px-5 py-5 rounded-md shadow-md bg-light' to="/user/orders">
                      <i className='text-2xl text-base-200'><PiBoxArrowUpFill /></i>
                      <p className='text-md font-semibold text-base-200'>ORDERS</p>
                    </Link>
                    <Link className='flex items-center justify-start gap-5 px-5 py-5 shadow-md rounded-md' to="/user/address">
                      <i className='text-2xl text-slate-500'><FaHome /></i>
                      <p className='text-md font-semibold text-slate-500'>ADDRESS</p>
                    </Link>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Link className='flex items-center justify-start gap-5 px-5 py-5 shadow-md rounded-md' to="/user/carts">
                      <i className='text-2xl text-primary'><FaShoppingCart /></i>
                      <p className='text-md font-semibold text-slate-500'>CART</p>
                    </Link>
                    <Link className='flex items-center justify-start gap-5 px-5 shadow-md rounded-md py-5'>
                      <i className='text-2xl text-primary'><IoMdWallet /></i>
                      <p className='text-md font-semibold text-slate-500'>PAYMENT</p>
                    </Link>
                    <button className='flex items-center justify-start gap-5 px-5 shadow-md rounded-md py-5' onClick={handleLogout}>
                      <i className='text-2xl text-primary'><MdPowerSettingsNew /></i>
                      <p className='text-md font-semibold text-slate-500'>LOGOUT</p>
                    </button>
                  </div>

                </div>

              </div>

              <div className='bg-white shadow-md lg:col-span-2 p-6'>
                <h2>Order Details</h2>
              </div>
            </div>
          </section >
      }
    </>
  )
}

export default Orders