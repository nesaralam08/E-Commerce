import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
function Dashboard() {
    const {user,isAuthenticated} = useAuth0()
  return (
    <div className='hero flex items-center justify-center min-h-screen'>
        <div>
            <h1>User Dashboard</h1>
            <p>{user.name}</p>
        </div>
    </div>
  )
}

export default Dashboard