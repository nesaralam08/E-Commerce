import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import ProductCard from '../utils/ProductCard'
import AxiosInstance from '../utils/AxiosInstance'
function Health() {
    const [healthitem,setHealthItem] = useState([])
    useEffect(()=>{
        AxiosInstance.get(`/api/product/get-all-health?hid=${"674ec4103441b8de1b6b4236"}`)
            .then((d) => setHealthItem(d.data.result))
    })
    return (
        <>
            <section className='min-h-screen h-auto'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-xl font-semibold xl:text-3xl text-slate-500 mt-5'>Helth & Beauty Section</h1>
                </div>
                <div className='container grid xl:grid-cols-4  py-5 gap-5 md:grid-cols-2 grid-cols-1'>

                    {
                        healthitem.length > 0 ? healthitem.map((i, index) => (
                            <ProductCard key={index} data={i} />
                        ))
                            :
                            <div className='min-h-screen w-full flex items-center justify-center'>
                                <h1 className='text-xl font-semibold xl:text-3xl text-slate-500'>No item available in Health & Beauty</h1>
                            </div>
                    }
                </div>
            </section>
        </>
    )
}

export default Health