import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../utils/ProductCard'
function Electronics() {
    const [elctronics, setElectronics] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/api/product/get-all-electronics?eid=${"674ec3a33441b8de1b6afb96"}`)
            .then((d) => setElectronics(d.data.result))
    }, [])
    return (
        <>
            <section className='min-h-screen h-auto'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-xl font-semibold xl:text-3xl text-slate-500 mt-5'>Electronics Section</h1>
                </div>
                <div className='container grid xl:grid-cols-4  py-5 gap-5 md:grid-cols-2 grid-cols-1'>

                    {
                        elctronics.length > 0 ? elctronics.map((i, index) => (
                            <ProductCard key={index} data={i} />
                        ))
                            :
                            <div className='min-h-screen w-full flex items-center justify-center'>
                                <h1 className='text-xl font-semibold xl:text-3xl text-slate-500'>No item available in Electronics</h1>
                            </div>
                    }
                </div>
            </section>
        </>
    )
}

export default Electronics