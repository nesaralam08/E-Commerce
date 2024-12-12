import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { PiBoxArrowUpFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { IoMdWallet } from "react-icons/io";
import { MdFolderShared } from "react-icons/md";
import { MdPowerSettingsNew } from "react-icons/md";
import axios from 'axios';
import AxiosInstance from '../utils/AxiosInstance';
function Dashboard() {
  const { user, isAuthenticated, logout } = useAuth0()
  const userid = localStorage.getItem("uid")
  const [userdata, setUserdata] = useState({})
  useEffect(() => {
    AxiosInstance.get(`/api/user/get-user?uid=${userid}`)
      .then((d) => setUserdata(d.data.result))
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

            <div className='bg-white rounded-sm shadow-md h-auto mt-4'>

              <div className='flex items-center justify-start gap-5 px-8 py-5'>
                <i className='text-2xl text-primary'><PiBoxArrowUpFill /></i>
                <p className='text-md font-semibold text-slate-500'>MY ORDERS</p>
              </div>

              <hr />
              <div className='flex items-center justify-start gap-5 px-8 py-5'>
                <i className='text-2xl text-primary'><FaUser /></i>
                <p className='text-md font-semibold text-slate-500'>ACCOUNT SETTINGS</p>
              </div>
              <div className='flex flex-col w-full items-center justify-center'>
                <Link className='hover:bg-[#f5faff] hover:text-primary bg-[#f5faffdd] w-full text-center py-3 text-sm'>Profile Information</Link>
                <Link className='hover:bg-[#F5FAFF] hover:text-primary w-full text-center py-3 text-sm'>Manage address</Link>
                <Link className='hover:bg-[#F5FAFF] hover:text-primary w-full text-center py-3 text-sm'>Pan card information</Link>
              </div>

              <hr />
              <div className='flex items-center justify-start gap-5 px-8 py-5'>
                <i className='text-2xl text-primary'><IoMdWallet /></i>
                <p className='text-md font-semibold text-slate-500'>PAYMENTS</p>
              </div>
              <div className='flex flex-col w-full items-center justify-center'>
                <Link className='hover:bg-[#f5faff] hover:text-primary bg-[#f5faffdd] w-full text-center py-3 text-sm'>Gift Cards</Link>
                <Link className='hover:bg-[#F5FAFF] hover:text-primary w-full text-center py-3 text-sm'>Saved UPI</Link>
                <Link className='hover:bg-[#F5FAFF] hover:text-primary w-full text-center py-3 text-sm'>Saved Cards</Link>
              </div>

              <hr />
              <div className='flex items-center justify-start gap-5 px-8 py-5'>
                <i className='text-2xl text-primary'><MdFolderShared /></i>
                <p className='text-md font-semibold text-slate-500'>MY STUFF</p>
              </div>
              <div className='flex flex-col w-full items-center justify-center'>
                <Link className='hover:bg-[#f5faff] hover:text-primary bg-[#f5faffdd] w-full text-center py-3 text-sm'>My coupons</Link>
                <Link className='hover:bg-[#F5FAFF] hover:text-primary w-full text-center py-3 text-sm '>All notifications</Link>
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
          </div>

          <div className='bg-white shadow-md lg:col-span-2 p-6'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col gap-4'>
                <h2 className='text-xl'>Personal information</h2>
                <div>
                  <input type="text" placeholder="Full name" name="name" className="input input-bordered w-full max-w-xs" value={userdata.name} onChange={handleChange} />
                </div>
                <div className='flex flex-col gap-3'>
                  <h4 className='text-md'>Your Gender</h4>
                  <select className="select select-bordered w-full max-w-xs" name='gender' value={userdata.gender} onChange={handleChange}>
                    <option disabled>select your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
                <h2 className='text-md'>Email address</h2>
                <div>
                  <input type="text" placeholder="Email address" name='email' disabled className="input input-bordered w-full max-w-xs" onChange={handleChange} value={userdata.email} />
                </div>
                <h2 className='text-md'>Mobile number</h2>
                <div>
                  <input type="text" placeholder="Mobile number" name='mobile_no' className="input input-bordered w-full max-w-xs" onChange={handleChange} value={userdata.mobile_no} />
                </div>
                <button className='btn btn-primary' type='submit'>Save Changes</button>

              </div>
            </form>
          </div>
        </div>
      </section >
    </>
  )
}

export default Dashboard