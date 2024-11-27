import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <RouterProvider router={Routes} />
  </AuthProvider>
</StrictMode>
)
