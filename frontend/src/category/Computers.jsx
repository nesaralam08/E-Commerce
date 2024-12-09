import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import ProductCard from '../utils/ProductCard'
import AxiosInstance from '../utils/AxiosInstance'
function Computers() {
    const [computers,setComputers] = useState([])
    useEffect(()=>{
        // const baseURL = import.meta.env.VITE_BASE_URL
        AxiosInstance.get(`/api/product/get-all-computers?cid=${"674ec3cf3441b8de1b6b180b"}`)
            .then((d) => setComputers(d.data.result))
    })
    return (
        <>
            <section className='min-h-screen h-auto'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-xl font-semibold xl:text-3xl text-slate-500 mt-5'>Computers Section</h1>
                </div>
                <div className='container grid xl:grid-cols-4  py-5 gap-5 md:grid-cols-2 grid-cols-1'>

                    {
                        computers.length > 0 ? computers.map((i, index) => (
                            <ProductCard key={index} data={i} />
                        ))
                            :
                            <div className='min-h-screen w-full flex items-center justify-center'>
                                <h1 className='text-xl font-semibold xl:text-3xl text-slate-500'>No item available in Computers</h1>
                            </div>
                    }
                </div>
            </section>
        </>
    )
}

export default Computers