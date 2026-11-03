import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuthContext } from '../context/Auth.context'
import Nav from '../modules/products/components/Nav'
import Loader from '../modules/products/components/Loader'

const ProtectedLayout = () => {

    const context=useAuthContext()

    if (context.loading) {
        
        return <Loader/>
        
    }

    if(!context.user){
        return <Navigate to={'/'}/>
    }
    
  return (
    <div>
        <div>
            <Nav/>
        </div>

        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default ProtectedLayout