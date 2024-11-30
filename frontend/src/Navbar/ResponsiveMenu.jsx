import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { CiUser } from "react-icons/ci";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoListOutline } from "react-icons/io5";
import { CiGift } from "react-icons/ci";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

// import {Dropdown,Link,DropdownTrigger,DropdownMenu,DropdownItem,Button} from '@nextui-org/react'
const menuLinks = [
    {
        icons: <CiUser />,
        name: "My Account",
    },
    {
        icons: <LiaCartPlusSolid />,
        name: "My Orders",
    },
    {
        icons: <IoListOutline />,
        name: "My Lists",
    },
    {
        icons: <CiGift />,
        name: "Voucher",
    },
    {
        icons: < MdOutlineHeadsetMic />,
        name: "Services/ 24x7",
    },
    {
        icons: <IoSettingsOutline />,
        name: "Settins",
    },
]
function ResponsiveMenu({ onClose }) {
    const { isAuthenticated, user, loginWithPopup, logout, isLoading } = useAuth0()
    return (
        <AnimatePresence>
            {
                (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='absolute top-36 md:top-24 right-0 w-[90%] md:w-[30%] h-screen z-20'
                    >
                        <div className='relative bg-primary -ml-3 text-white md:ml-28 mr-5 p-4 -pt-2 rounded-md min-h-44 h-auto'>
                            <div className='absolute -top-3 -right-3'>
                                <button className=' px-2 py-2 rounded-full border mb-2 bg-blue-950 border-blue-950 hover:bg-primary' onClick={onClose}>
                                    <i className='sm:text-2xl'><RxCross2 /></i>
                                </button>
                            </div>
                            {
                                isAuthenticated && (
                                    <div className='flex items-center justify-evenly gap-1'>
                                        <div className="avatar">
                                            <div className="w-14 rounded-full">
                                                <img src={user.picture} />
                                            </div>
                                        </div>
                                        <div>
                                            <p className='font-semibold'>{user.name}</p>
                                            <p className='text-slate-200'>{user.email}</p>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                isAuthenticated && <hr className='mt-3' />
                            }
                            <div className='w-full'>
                                {
                                    menuLinks.map((i, index) => (
                                        <button className='w-full' key={index}>
                                            <div className='flex items-center gap-4 rounded-md mt-2 p-2 hover:bg-light'>
                                                <i className='text-2xl md:text-3xl'>{i.icons}</i>
                                                <div>
                                                    <h3 className='font-semibold text-left'>{i.name}</h3>
                                                </div>
                                            </div>
                                        </button>
                                    ))
                                }
                            </div>
                            {
                                isAuthenticated ?
                                    <button className='w-full bg-secondary py-2 rounded-sm hover:bg-blue-950 duration-700 mt-3' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                        Log Out
                                    </button>
                                    :
                                    <button className='w-full bg-secondary py-2 rounded-sm hover:bg-blue-950 duration-700 mt-3' onClick={() => loginWithPopup()}>
                                        Log In
                                    </button>
                            }
                            {/* <div className='bg-slate-600'>Col 2</div> */}
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default ResponsiveMenu