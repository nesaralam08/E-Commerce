import React from 'react'
import { useState, useRef } from 'react';
import SwiperPage from './SwiperPage';
import { useAuth0 } from '@auth0/auth0-react'
function Home() {
  const { isAuthenticated, user, isLoading } = useAuth0()
  return (

    <>
      <SwiperPage />
      <section className='min-h-screen h-auto'>
        <div className='container grid xl:grid-cols-4 py-5 gap-5 md:grid-cols-2 grid-cols-1'>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
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
          </div>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full xl:w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between w-full">
                <button className="btn btn-primary w-1/3">Buy Now</button>
                <button className="btn btn-primary w-1/2">Add to cart</button>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className='w-full justify-center flex my-5'>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home