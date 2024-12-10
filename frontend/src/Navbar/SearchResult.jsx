import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from '../utils/ProductCard'

function SearchResult() {
    const location = useLocation()
    const { query, products } = location.state || {query:'',products:[]}

    return (
        <section className='min-h-screen h-auto'>
            <h2 className='text-center text-xl xl:text-2xl text-slate-500 mt-3'>Search Results for {query}</h2>
            <div className='container grid xl:grid-cols-4 py-5 gap-5 md:grid-cols-2 grid-cols-1'>
                {
                    products.length === 0 ? (
                        <div className='h-96 lg:min-h-screen flex items-center justify-center w-full'>
                            <p className='text-xl xl:text-2xl text-danger-300'>No items found !</p>
                        </div>
                    ) :
                    products.map((i, index) => (
                        <ProductCard key={index} data={i} />
                    ))
                }
            </div>
        </section>
    )
}

export default SearchResult