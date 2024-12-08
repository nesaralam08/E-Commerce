import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import ProductCard from '../utils/ProductCard'
function Gaming() {
    const [gaming,setGaming] = useState([])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BASE_URL}/api/product/get-all-gaming?gid=${"674ec3d83441b8de1b6b1da1"}`)
            .then((d) => setGaming(d.data.result))
    })
    return (
        <>
            <section className='min-h-screen h-auto'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-xl font-semibold xl:text-3xl text-slate-500 mt-5'>Games Section</h1>
                </div>
                <div className='container grid xl:grid-cols-4  py-5 gap-5 md:grid-cols-2 grid-cols-1'>

                    {
                        gaming.length > 0 ? gaming.map((i, index) => (
                            <ProductCard key={index} data={i} />
                        ))
                            :
                            <div className='min-h-screen w-full flex items-center justify-center'>
                                <h1 className='text-xl font-semibold xl:text-3xl text-slate-500'>No item available in Games</h1>
                            </div>
                    }
                </div>
            </section>
        </>
    )
}

export default Gaming