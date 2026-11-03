import React from 'react'
import authHook from './hook/Auth.hook'

const Login = () => {

    const {register,handleSubmit,errors,loginHandle,navigate} = authHook()

  return (
    
<div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 via-purple-50 to-pink-100 px-4 py-10">
  <div className="w-full max-w-md rounded-3xl bg-white p-6 sm:p-10 shadow-2xl shadow-indigo-200/50 border border-white">
    
    <div className="mb-8 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 text-3xl text-white shadow-lg shadow-indigo-300">
        ✨
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-800">
        Welcome back
      </h1>

      <p className="mt-3 text-sm sm:text-base text-gray-500">
        
      </p>
    </div>

    <form 
    onSubmit={handleSubmit(loginHandle)}
    action="" className="space-y-5">
      <input
      {...register('email',{
        required:"email is required"
      })}
        type="email"
        placeholder="Enter email"
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition duration-200 placeholder:text-gray-400 hover:border-indigo-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
      />
         {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
      <input
      {...register('password',{
        required:"password is required"
      })}
        type="password"
        placeholder="Enter password"
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition duration-200 placeholder:text-gray-400 hover:border-indigo-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
      />
        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
        
      <button className="w-full rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 py-3.5 font-bold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl active:translate-y-0">
        Login
      </button>
    </form>

    <div className="mt-7 flex flex-wrap items-center justify-center gap-1 text-sm sm:text-base">
      <p className="text-gray-500">Don't have an account?</p>

      <span 
      onClick={()=>navigate('/register')}
      className="cursor-pointer font-bold text-indigo-600 transition-colors hover:text-purple-700 hover:underline">
        Register
      </span>
    </div>

  </div>
</div>


  )
}

export default Login