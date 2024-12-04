import React from 'react'
import { useState, useRef } from 'react';
import SwiperPage from './SwiperPage';
import { useAuth0 } from '@auth0/auth0-react'
import { motion } from 'motion/react'
function Home() {
  const { isAuthenticated, user, isLoading } = useAuth0()
  return (

    <>
      <SwiperPage />
      <section className='min-h-screen h-auto -mt-40'>
        <div className='container grid xl:grid-cols-4 py-5 gap-5 md:grid-cols-2 grid-cols-1'>
          <motion.div className="card bg-base-100 w-full xl:w-80 shadow-xl z-10">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">1800.00 Rs/-</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </motion.div>
          <motion.div className="card bg-base-100 w-full xl:w-80 shadow-xl z-10">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">1800.00 Rs/-</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </motion.div>
          <motion.div className="card bg-base-100 w-full xl:w-80 shadow-xl z-10">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">1800.00 Rs/-</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </motion.div>
          <motion.div className="card bg-base-100 w-full xl:w-80 shadow-xl z-10">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">1800.00 Rs/-</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </motion.div>
          <motion.div className="card bg-base-100 w-full xl:w-80 shadow-xl z-10">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">1800.00 Rs/-</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </motion.div>
          <motion.div className="card bg-base-100 w-full xl:w-80 shadow-xl z-10">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">1800.00 Rs/-</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </motion.div>
          <motion.div className="card bg-base-100 w-full xl:w-80 shadow-xl z-10">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">1800.00 Rs/-</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </motion.div>
          <motion.div className="card bg-base-100 w-full xl:w-80 shadow-xl z-10">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">1800.00 Rs/-</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default Home