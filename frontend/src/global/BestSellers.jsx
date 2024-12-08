import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import ProductCard from '../utils/ProductCard'
function BestSellers() {
    const [bestsellers,setBestSellers] = useState([])
    return (
        <>
            <section className='min-h-screen h-auto'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-xl font-semibold xl:text-3xl text-slate-500 mt-5'>Best Sellers</h1>
                </div>
                <div className='container grid xl:grid-cols-4  py-5 gap-5 md:grid-cols-2 grid-cols-1'>

                    {
                        bestsellers.length > 0 ? bestsellers.map((i, index) => (
                            <ProductCard key={index} data={i} />
                        ))
                            :
                            <div className='min-h-screen w-full flex items-center justify-center'>
                                <h1 className='text-xl font-semibold xl:text-3xl text-slate-400'>No item available in Best Sellers</h1>
                            </div>
                    }
                </div>
            </section>
        </>
    )
}

export default BestSellers