import React, { useState } from 'react'
import { handleError, handleSuccess } from '../utils/ReactToast'
import { useAuth0 } from '@auth0/auth0-react'
import { BsCartPlus } from "react-icons/bs";
import axios from 'axios';
import { Link } from 'react-router-dom';
import AxiosInstance from './AxiosInstance';
function ProductCard({ data }) {
    const { isAuthenticated, user, isLoading } = useAuth0()
    const [loading,setLoading] = useState(false)
    const handleCart = (id) => {
        setLoading(true)
        if (!isAuthenticated) {
            setLoading(false)
            handleError("Login Now !")
        }
        if (isAuthenticated) {
            AxiosInstance.post('/api/cart/add-item', { pid: id, uid: localStorage.getItem("uid") })
                .then((d) => {
                    setLoading(false)
                    handleSuccess(d.data.message)
                })
                .catch((e) => {
                    setLoading(false)
                    handleError(e.response.data.message)
                })
            // axios.post(`${import.meta.env.VITE_BASE_URL}/api/cart/add-item`, { pid: id, uid: localStorage.getItem("uid") })
            //     .then((d) => handleSuccess(d.data.message))
            //     .catch((e) => handleError(e.response.data.message))
        }
    }
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between z-10">
            {/* <a href="#"> */}
            <img
                className="xl:p-8 p-12 rounded-t-lg"
                src={data.image_url}
                alt="product image"
            />
            {/* </a> */}
            <div className="px-5 pb-5">
                {/* <a href="#"> */}
                <Link className="text-lg font-semibold tracking-tight text-gray-900 hover:text-primary" to={`/item/${data.url}?itemid=${data._id}`}>
                    {
                        data.description
                    }
                </Link>
                {/* </a> */}
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 text-gray-200 dark:text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                        5.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                        ₹{
                            data.price
                        }
                    </span>

                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex gap-1 items-center' onClick={() => handleCart(data._id)}>
                        <BsCartPlus className='text-lg' /> { loading ? "Waiting..": "Add to cart"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard