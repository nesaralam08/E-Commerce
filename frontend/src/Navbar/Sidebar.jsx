import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IoBag } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiBlackBook } from "react-icons/gi";
import { IoHeadsetOutline } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoListOutline } from "react-icons/io5";
import { CiGift } from "react-icons/ci";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
const catList = [
    {
        icons: <IoBag />,
        name: "Fashion",
        tag: "Trending design to inspire you",
        path: "/category/fashion"
    },
    {
        icons: <FaRegLightbulb />,
        name: "Electronics",
        tag: "Trending design to inspire you",
        path: "/category/electronics"
    },
    {
        icons: <FaComputer />,
        name: "Computer & Office",
        tag: "Trending design to inspire you",
        path: "/category/computers-and-office"
    },
    {
        icons: <IoGameControllerOutline />,
        name: "Gaming",
        tag: "Trending design to inspire you",
        path: "/category/gaming"
    },
    {
        icons: < GiBlackBook />,
        name: "Books",
        tag: "Trending design to inspire you",
        path: "/category/books"
    },
    {
        icons: <IoHeadsetOutline />,
        name: "Sports & Outdoors",
        tag: "Trending design to inspire you",
        path: "/category/sports-and-outdoors"
    },
    {
        icons: <MdFastfood />,
        name: "Food & Grocery",
        tag: "Trending design to inspire you",
        path: "/category/food-and-grocery"
    },
    {
        icons: <MdOutlineHealthAndSafety />,
        name: "Health  & Beauty",
        tag: "Trending design to inspire you",
        path: "/category/health-and-beauty"
    },
]
const menuLinks = [
    {
        icons: <CiUser />,
        name: "My Account",
        path: "/user/dashboard"
    },
    {
        icons: <LiaCartPlusSolid />,
        name: "My Orders",
        path: "/user/orders"
    },
    {
        icons: <IoListOutline />,
        name: "My Cart",
        path: "/user/carts"
    },
    {
        icons: <CiGift />,
        name: "Voucher",
        path: "/voucher"
    },
    {
        icons: < MdOutlineHeadsetMic />,
        name: "Services/ 24x7",
        path: "/services"
    },
    {
        icons: <IoSettingsOutline />,
        name: "Settins",
        path: "/settings"
    },
]
function Sidebar({ isDrawerOpen, handleItemClick }) {
    const { isAuthenticated, user, loginWithPopup, logout, isLoading } = useAuth0()
    return (
        <div className="drawer-side z-30">
            {/* Close button for the drawer */}
            <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className={`drawer-overlay ${isDrawerOpen ? '' : 'hidden'}`}
            />
            <div className='z-30 w-80 lg:w-96 bg-base-200 min-h-screen'>
                {/* Profile Show */}
                {
                    isAuthenticated ? (
                        <div className='flex items-center justify-evenly gap-1 bg-primary p-2 rounded-sm'>
                            <div className="avatar">
                                <div className="w-14 rounded-full">
                                    <img src={user.picture} />
                                </div>
                            </div>
                            <div>
                                <p className='font-semibold'>{user.name}</p>
                                <p className=''>{user.email}</p>
                            </div>
                        </div>
                    )
                        :
                        <div className='flex items-center justify-evenly gap-1 bg-primary p-2 '>
                            {
                                isAuthenticated ?
                                    <button className='w-full bg-secondary py-2 rounded-sm  mt-3 text-white' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                        Log Out
                                    </button>
                                    :
                                    <button className='w-full bg-secondary py-2 rounded-sm text-white  mt-3' onClick={() => loginWithPopup()}>
                                        Log In
                                    </button>
                            }
                        </div>
                }
                {/* Categoty Show */}
                <h2 className='text-md lg:text-xl font-semibold uppercase mt-3 text-center text-slate-800'>Category List</h2>
                <div className='w-[95%] p-5'>
                    {
                        catList.map((i, index) => (
                            <Link className='w-full' key={index} to={i.path} onClick={handleItemClick}>
                                <div className='flex items-center gap-4 rounded-md mt-2 p-2 hover:bg-light'>
                                    <i className='text-xl md:text-2xl text-slate-600'>{i.icons}</i>
                                    <div>
                                        <h3 className='font-semibold text-left text-slate-600'>{i.name}</h3>
                                        {/* <p className='text-[12px] md:text-[14px]'>{i.tag}</p> */}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                {/* user Details */}
                <div className='w-full bg-base-300 h-[1px]'></div>
                <h2 className='text-md lg:text-xl font-semibold uppercase mt-2 text-center text-slate-700'>user details</h2>
                <div className='w-[95%] p-5'>
                    {
                        menuLinks.map((i, index) => (
                            <Link className='w-full' key={index} to={i.path} onClick={handleItemClick}>
                                <div className='flex items-center gap-4 rounded-md mt-2 p-2 hover:bg-light'>
                                    <i className='text-2xl md:text-2xl text-slate-600'>{i.icons}</i>
                                    <div>
                                        <h3 className='font-semibold text-left text-slate-600'>{i.name}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                    {
                        isAuthenticated ?
                            <button className='w-full bg-secondary py-2 rounded-sm hover:bg-primary  mt-3 text-white' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button>
                            :
                            <button className='w-full bg-secondary py-2 rounded-sm hover:bg-primary  mt-3' onClick={() => loginWithPopup()}>
                                Log In
                            </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar