import React from 'react'
import { useState, useRef } from 'react';
import SwiperPage from './SwiperPage';
function Home() {
  return (

    <>
      <SwiperPage/>
      <section className='hero h-80 flex items-center justify-center flex-col'>
        <h1>Show Items</h1>
      </section>
    </>
  )
}

export default Home