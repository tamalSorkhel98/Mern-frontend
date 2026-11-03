import React, { useEffect, useState } from 'react'
import productHook from './hook/productHook'
import Loader from './components/Loader'
import ProductCard from './components/ProductCard'

const Products = () => {

  const {getAllProduct,loading,productData}=productHook()

  

  useEffect(() => {
    const fetchProduct=async()=>{
      await getAllProduct()
    }
    fetchProduct()
  }, [])
  

  if (loading) {
    return <Loader/>
  } 
  
  
 return (
    <div className="min-h-screen bg-gray-50 p-5 sm:p-8">

      <h1 className="mb-8 text-2xl font-bold text-gray-800 sm:text-3xl">
        Explore Products
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {productData?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}

export default Products