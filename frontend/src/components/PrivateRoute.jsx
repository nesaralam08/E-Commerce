import {useNavigate} from 'react-router-dom'
import {useAuth0} from '@auth0/auth0-react'
import PageLoading from './PageLoading'
import { useEffect } from 'react'
import {handleError} from '../utils/ReactToast'
function PrivateRoute({Component}) {
  const navigate = useNavigate()
  const {isAuthenticated,isLoading} = useAuth0()
  // if(isLoading){
  //   return <PageLoading/>
  // }
  useEffect(()=>{
    if(!isAuthenticated){
      handleError("Login Now")
      navigate('/')
    }
  },[isAuthenticated,navigate])
  return (
    <>
      {
        isAuthenticated ? <Component/> : null
      }
    </>
  )
}

export default PrivateRoute