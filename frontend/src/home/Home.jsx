import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import SwiperPage from './SwiperPage';
import { useAuth0 } from '@auth0/auth0-react'
import { motion } from 'motion/react'
import { handleError } from '../utils/ReactToast'
import { BsCartPlus } from "react-icons/bs";
import axios from 'axios';
import ProductCard from '../utils/ProductCard';
function Home() {
  const { isAuthenticated, user, isLoading } = useAuth0()
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get("http://localhost:4000/api/product/get-all")
      .then((d) => setProduct(d.data.result))
  }, [])
  return (

    <>
      <SwiperPage />
      <section className='min-h-screen h-auto'>
        <div className='container grid xl:grid-cols-4 -mt-56 py-5 gap-5 md:grid-cols-2 grid-cols-1'>
          {
            product.map((i,index)=>(
              <ProductCard key={index} data={i}/>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Home