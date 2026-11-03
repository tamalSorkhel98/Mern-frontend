import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuthContext } from '../context/Auth.context'

const AuthLayout = () => {

    const context=useAuthContext()

     if (context.loading) {
        return 'loading..'
        
    }

    if(context.user){
        return <Navigate to={'/main'}/>
    }

  return (
    <div><Outlet/></div>
  )
}

export default AuthLayout