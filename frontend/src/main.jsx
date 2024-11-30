import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Auth0Provider} from '@auth0/auth0-react'
import {ToastContainer} from "react-toastify"
import 'react-toastify/ReactToastify.css'
createRoot(document.getElementById('root')).render(
    <Auth0Provider
      domain="dev-fvr6gf84gca4tu53.us.auth0.com"
      clientId="tH1dVBkdt98jx0YqlSzFSnApR4RrGciK"
      authorizationParams={{
        redirect_uri:window.location.origin
      }}
    >
      <App />
      <ToastContainer/>
    </Auth0Provider>
)
