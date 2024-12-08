import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import PageLoading from '../components/PageLoading'
import axios from 'axios'
import { TbTruckReturn } from "react-icons/tb";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { LiaTrophySolid } from "react-icons/lia";
import { useAuth0 } from '@auth0/auth0-react'
import { handleError, handleSuccess } from '../utils/ReactToast'
import ProductCard from './ProductCard';
function useQuery() {
    const location = useLocation()
    return new URLSearchParams(location.search)
}
function ItemPage() {
    // const { url } = useParams()
    const query = useQuery()
    const itemid = query.get('itemid')
    const [loading, setLoading] = useState(true)
    const [item, setitem] = useState({})
    const { isAuthenticated } = useAuth0()
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/api/product/get-pr?sid=${itemid}`)
            .then((d) => {
                setitem(d.data.result || {})
                setLoading(false)
            })
    }, [itemid])
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/api/product/get-all`)
            .then((d) => setProduct(d.data.result || []))
    }, [])
    const handleCart = (id) => {
        // console.log(id)
        if (!isAuthenticated) {
            handleError("Login Now !")
        }
        if (isAuthenticated) {
            axios.post(`${import.meta.env.VITE_BASE_URL}/api/cart/add-item`, { pid: id, uid: localStorage.getItem("uid") })
                .then((d) => handleSuccess(d.data.message))
                .catch((e) => handleError(e.response.data.message))
        }
    }
    return (
        <>
            {
                loading ? <PageLoading /> : (
                    <>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 bg-white px-6 py-4 min-h-screen w-full'>
                            <div className='max-h-[85%] flex items-center justify-center'>
                                <img src={item.image_url} alt="" className='h-80 md:h-96 w-auto p-5' />
                            </div>
                            <div className='h-full bg-slate-50 p-5 rounded-sm'>
                                <div>
                                    <h4 className='text-xl lg:text-2xl font-light'>{item.description}</h4>
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
                                        <span className='ml-3 text-md'>546 ratings</span>
                                    </div>
                                    <span className='text-lg font-light'>1000+ bought in past mongth</span>
                                </div>
                                <hr className='mt-3' />
                                <div className='mt-5 mb-3'>
                                    <h3 className='text-3xl font-semibold'>₹{item.price}</h3>
                                    <p>inclusive of all taxes</p>
                                </div>
                                <hr />
                                <div className='mt-5 flex justify-evenly mb-3'>
                                    <div>
                                        <TbTruckReturn className='text-2xl' />
                                        <span className='text-xs'>10 days return</span>
                                    </div>
                                    <div>
                                        <RiMoneyRupeeCircleLine className='text-2xl' />
                                        <span className='text-xs'>Pay on delivery</span>
                                    </div>
                                    <div>
                                        <LiaTruckMovingSolid className='text-2xl' />
                                        <span className='text-xs'>Free delivery</span>
                                    </div>
                                    <div>
                                        <LiaTrophySolid className='text-2xl' />
                                        <span className='text-xs'>Top Brand</span>
                                    </div>
                                </div>
                                <hr />
                                <div className='mt-5 w-full flex justify-evenly flex-col gap-2'>
                                    <button className='btn w-full' onClick={() => handleCart(item._id)}>Add to cart</button>
                                    <button className='btn btn-primary w-full'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='flex items-center justify-center mt-5'>
                            <h1 className='text-xl font-semibold md:text-3xl text-slate-400'>You might also like</h1>
                        </div>
                        <div className='container grid xl:grid-cols-4  py-5 gap-5 md:grid-cols-2 grid-cols-1'>
                            
                            {
                                product.map((i, index) => (
                                    <ProductCard key={index} data={i} />
                                ))
                            }
                        </div>
                    </>

                )
            }
        </>
    )
}

export default ItemPage