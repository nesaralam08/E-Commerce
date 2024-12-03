import React from 'react'
import { useState, useRef } from 'react';
import SwiperPage from './SwiperPage';
import {useAuth0} from '@auth0/auth0-react'
function Home() {
  const {isAuthenticated,user,isLoading} = useAuth0()
  return (

    <>
      <SwiperPage/>
      <section className='hero h-80 flex items-center justify-center flex-col'>
        <p>Home Page</p>
      </section>
    </>
  )
}

export default Home