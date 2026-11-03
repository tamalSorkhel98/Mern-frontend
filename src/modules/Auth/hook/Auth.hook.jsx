import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '../../../context/Auth.context'
import { useNavigate } from 'react-router'
import { useApi } from '../../shared/api'

const authHook = () => {

    const context=useAuthContext()
    const navigate=useNavigate()
    const api=useApi()

    const {register,handleSubmit,formState:{errors}}=useForm()

    const loginHandle=async(data)=>{
      try {
        const res = await api.post('/auth/login',data)
        context.setUser(res.data.data.user)
        context.setAccessToken(res.data.data.accessToken)
        navigate('/main')
      } catch (error) {
        return alert('wrong email or password')
      }
          
    }

    const registerHandle=async(data)=>{
        try {
          const res = await api.post('/auth/register',data)
          console.log(res); 
          navigate('/')
        } catch (error) {
          return alert('duplicate email id is not allowed')
        }   
    }

    const logOutHandle=async()=>{
      const res = await api.post('/auth/logout')

      context.setAccessToken(null)
      context.setUser(null)
      
      navigate('/')
    }

    

  return{
    registerHandle,register,handleSubmit,errors,loginHandle,
    navigate,logOutHandle
  }
}

export default authHook