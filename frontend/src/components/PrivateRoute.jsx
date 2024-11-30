import {useNavigate} from 'react-router-dom'
import {useAuth0} from '@auth0/auth0-react'
import PageLoading from './PageLoading'
function PrivateRoute({Component}) {
  const navigate = useNavigate()
  const {isAuthenticated,isLoading} = useAuth0()
  if(isLoading){
    return <PageLoading/>
  }
  
  return (
    <>
      {
        isAuthenticated ? <Component/> : navigate('/')  
      }
    </>
  )
}

export default PrivateRoute