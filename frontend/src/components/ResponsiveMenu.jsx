import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
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
function ResponsiveMenu({ open }) {
    const { isAuthenticated, user, loginWithPopup, logout, isLoading } = useAuth0()
    return (
        <AnimatePresence>
            {
                open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='absolute top-20 left-0 w-full h-screen z-20'
                    >
                        <div className='bg-primary text-white ml-40 mr-5 -pt-2 pb-5 rounded-md flex items-center justify-center flex-col gap-5'>
                            {
                                isAuthenticated && (
                                    <div className='flex items-center justify-center flex-col gap-1'>
                                        <div className="avatar  md:hidden">
                                            <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                                                <img src={user.picture} />
                                            </div>
                                        </div>
                                        <p>{user.name}</p>
                                        <p>{user.email}</p>
                                        <button className='px-11 rounded-sm py-2 bg-blue-950 hover:bg-blue-800'>
                                            View Profile
                                        </button>

                                    </div>
                                )
                            }

                            <ul>
                                {
                                    navLinks.map((i, index) => (
                                        <li className=' mt-3 hover:text-black'><Link to={i.path}>{i.name}</Link></li>
                                    ))
                                }
                                {
                                    isAuthenticated ? <button className='px-14 mt-3 rounded-sm py-2 bg-blue-950 hover:bg-blue-800 font-semibold' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                        {
                                            isLoading ? <span className="loading loading-spinner loading-md"></span> : <span>Log Out</span>
                                        }
                                    </button> :
                                        <button className='px-14 mt-3 rounded-sm py-2 bg-blue-950 hover:bg-blue-800 font-semibold' onClick={() => loginWithPopup()}>
                                            {
                                                isLoading ? <span className="loading loading-spinner loading-md"></span> : <span>Log In</span>
                                            }
                                        </button>
                                }
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default ResponsiveMenu