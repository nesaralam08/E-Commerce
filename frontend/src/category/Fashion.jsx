import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../utils/ProductCard'
function Fashion() {
    const [fashionItem, setFashionItem] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/api/product/get-all-fashion?fid=${"674ec3653441b8de1b6adb2c"}`)
            .then((d) => setFashionItem(d.data.result))
    }, [])
    return (
        <>
            <section className='min-h-screen h-auto'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-xl font-semibold xl:text-3xl text-slate-500 mt-5'>Fashion Section</h1>
                </div>
                <div className='container grid xl:grid-cols-4  py-5 gap-5 md:grid-cols-2 grid-cols-1'>

                    {
                        fashionItem.length > 0 ? fashionItem.map((i, index) => (
                            <ProductCard key={index} data={i} />
                        ))
                            :
                            <div className='min-h-screen w-full flex items-center justify-center'>
                                <h1 className='text-xl font-semibold xl:text-3xl text-slate-500'>No item available in fashion</h1>
                            </div>
                    }
                </div>
            </section>
        </>
    )
}

export default Fashion