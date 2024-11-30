import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
function Home() {
  const { logout, loginWithPopup, isAuthenticated ,isLoading} = useAuth0()
  return (
    <section className='hero min-h-screen flex items-center justify-center flex-col'>
      <h1 className='text-3xl'>Home Page</h1>
    </section>
  )
}

export default Home