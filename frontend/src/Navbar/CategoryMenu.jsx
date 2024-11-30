import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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

const navLinks = [
    {
        name: "My Account",
        path: "#"
    },
    {
        name: "My Orders",
        path: "#"
    },
    {
        name: "Delivery Address",
        path: "#"
    },
    {
        name: "Settings",
        path: "#"
    },
    {
        name: "Helpdesk",
        path: "#"
    },
]
const catList = [
    {
        icons: <IoBag />,
        name: "Fashion",
        tag: "Trending design to inspire you",
        path:"/category/fashion"
    },
    {
        icons: <FaRegLightbulb />,
        name: "Electronics",
        tag: "Trending design to inspire you",
        path:"/category/electronics"
    },
    {
        icons: <FaComputer />,
        name: "Computer & Office",
        tag: "Trending design to inspire you",
        path:"/category/computers-and-office"
    },
    {
        icons: <IoGameControllerOutline />,
        name: "Gaming",
        tag: "Trending design to inspire you",
        path:"/category/gaming"
    },
    {
        icons: < GiBlackBook />,
        name: "Books",
        tag: "Trending design to inspire you",
        path:"/category/books"
    },
    {
        icons: <IoHeadsetOutline />,
        name: "Sports & Outdoors",
        tag: "Trending design to inspire you",
        path:"/category/sports-and-outdoors"
    },
    {
        icons: <MdFastfood />,
        name: "Food & Grocery",
        tag: "Trending design to inspire you",
        path:"/category/food-and-grocery"
    },
    {
        icons: <MdOutlineHealthAndSafety />,
        name: "Health  & Beauty",
        tag: "Trending design to inspire you",
        path:"/category/health-and-beauty"
    },
]
function CategoryMenu({ onClose }) {
    const { isAuthenticated, user, loginWithPopup, logout, isLoading } = useAuth0()
    return (
        <AnimatePresence>
            {
                (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='absolute top-36 md:top-24 left-0 w-full h-screen z-20'
                    >
                        <div className='bg-primary text-white p-4 rounded-md w-[90%] h-auto ml-5 md:w-[23%] md:ml-56 relative'>
                            <div className='absolute -top-3 -right-3'>
                                <button className=' px-2 py-2 rounded-full border mb-2 bg-blue-950 border-blue-950 hover:bg-primary' onClick={onClose}>
                                    <i className='sm:text-2xl'><RxCross2 /></i>
                                </button>
                            </div>
                            <div className='w-full'>
                                {
                                    catList.map((i, index) => (
                                        <Link className='w-full' key={index} to={i.path} onClick={onClose}>
                                            <div className='flex items-center gap-4 rounded-md mt-2 p-2 hover:bg-light'>
                                                <i className='text-2xl md:text-3xl'>{i.icons}</i>
                                                <div>
                                                    <h3 className='font-semibold text-left'>{i.name}</h3>
                                                    <p className='text-slate-200 text-[12px] md:text-[14px]'>{i.tag}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                            {/* <div className='bg-slate-600'>Col 2</div> */}
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default CategoryMenu