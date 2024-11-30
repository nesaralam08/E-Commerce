import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IoBag } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const cartList = [
    {
        icons: <IoBag />,
        name: "Apple iPhone 15",
        tag: "Golden Edition, 256GB",
        price: 40000,
        quantity: 2
    },
    {
        icons: <FaRegLightbulb />,
        name: "Apple ipad Air",
        tag: "Silver, 64GB",
        price: 35000,
        quantity: 1
    },
    {
        icons: <FaComputer />,
        name: "Apple Watch SE",
        tag: "Purple, GPS",
        price: 60000,
        quantity: 3
    },
    {
        icons: <IoGameControllerOutline />,
        name: "Apple iMac",
        tag: "512GB, 32GB RAM",
        price: 80000,
        quantity: 1
    },

]
function CartPage({ onClose }) {
    const { isAuthenticated, user, loginWithPopup, logout, isLoading } = useAuth0()
    const totalPrice = () => {
        var sum = 0;
        for (var i = 0; i < cartList.length; i++) {
            sum += cartList[i].price
        }
        return sum
    }
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
                        {
                            isAuthenticated ?
                                <div className='relative bg-primary text-white mr-4 -ml-5 p-4 -pt-2 rounded-md min-h-44 h-auto'>
                                    <div className='absolute -top-5 -right-4'>
                                        <button className=' px-2 py-2 rounded-full border mb-2 bg-blue-950 border-blue-950 hover:bg-primary' onClick={onClose}>
                                            <i className='sm:text-2xl'><RxCross2 /></i>
                                        </button>
                                    </div>
                                    <div className='w-full'>
                                        <div className='flex justify-between items-center'>
                                            <h2 className='font-semibold text-xl'>Your Shopping Cart</h2>
                                            <p className='text-slate-200'>{cartList.length} items</p>
                                        </div>
                                        <hr className='mt-4' />
                                        {
                                            cartList.map((i, index) => (
                                                // <button className='w-full' key={index}>
                                                <div className='flex items-center sm:justify-between justify-between gap-3 rounded-md mt-2 p-2' key={index}>
                                                    <i className='text-xl md:text-3xl'>{i.icons}</i>
                                                    <div>
                                                        <button className='hover:underline'>
                                                            <h3 className='font-semibold text-left text-[12px] md:text-[16px]'>{i.name}</h3>
                                                        </button>
                                                        <p className='text-slate-200 text-[12px] md:text-sm text-left'>{i.tag}</p>
                                                    </div>
                                                    <p>X{i.quantity}</p>
                                                    <div className='flex items-center justify-between gap-2'>

                                                        <p className='font-semibold text-[14px] md:text-[16px]'>{i.price} Rs</p>
                                                        <div className="tooltip cursor-pointer" data-tip="Remove">
                                                            <i className='sm:text-2xl text-red-400'><FaRegTrashAlt /></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                // </button>
                                            ))
                                        }
                                        <hr />
                                        <div className='flex items-center justify-between px-3 mt-3'>
                                            <h2 className='text-xl font-semibold'>Total</h2>
                                            <h2 className='text-xl font-semibold'>{totalPrice()} Rs/-</h2>
                                        </div>
                                        <button className='bg-secondary w-full py-3 rounded-sm mt-3 hover:bg-blue-900 duration-500 sm:text-xl'>
                                            See your cart
                                        </button>
                                    </div>
                                    {/* <div className='bg-slate-600'>Col 2</div> */}
                                </div>
                                :
                                // handleError("Unauthorized access, Login Now")
                                <div>
                                    <p>Log In</p>
                                </div>
                        }
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default CartPage