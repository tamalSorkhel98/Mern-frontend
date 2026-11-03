import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router'
import router from '../router/app.routes'
import { ContextProvider } from '../context/Auth.context'
import { ProductContextProvider } from '../context/Product.context'

const App = () => {
  return (
    <ContextProvider>
      <ProductContextProvider>
        <RouterProvider router={router}/>
      </ProductContextProvider>
    </ContextProvider>
  )
}

export default App