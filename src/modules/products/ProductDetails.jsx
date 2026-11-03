import React, { useEffect } from 'react'
import { data, useParams } from 'react-router'
import productHook from './hook/productHook'
import { useAuthContext } from '../../context/Auth.context'

const ProductDetails = () => {
    const {id}=useParams()
    const {getById,productData,productDetail,updateHandle}=productHook()
    const context=useAuthContext()
    
    useEffect(() => {
      const fetchData=async()=>{
       const data= getById(id)
      }
      fetchData()
      
    }, [])
    
  return (


  <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8 lg:px-12">

  <div className="mx-auto w-full max-w-6xl">
    
     <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

    {/* Product Image */}
    <div className="relative h-64 overflow-hidden  bg-gray-100 sm:h-72 lg:h-64">

      <img
        src={productDetail?.images?.[0]}
        alt={productDetail?.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <span className="absolute right-3 top-3 rounded-full border border-white/50 bg-white/90 px-4 py-2 text-xs font-bold text-emerald-700 shadow-lg backdrop-blur-md">
        {productDetail?.sizes?.reduce((total, item) => total + item.stock, 0)} In Stock
      </span>

    </div>

    {/* Product Details */}
    <div className="space-y-5 p-5 sm:p-6">

      <div>
        <h2 className="line-clamp-1 text-xl font-extrabold capitalize tracking-tight text-gray-900 sm:text-2xl">
          {productDetail?.title}
        </h2>

        <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-gray-500 sm:text-base">
          {productDetail?.description}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Price
          </p>

          <span className="mt-1 block text-2xl font-extrabold tracking-tight text-indigo-600 sm:text-3xl">
            {productDetail?.price?.currency} : {productDetail?.price?.amount}
          </span>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-xl text-indigo-600">
          ₹
        </div>

      </div>

      {/* Available Sizes */}
      <div>

        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-bold uppercase tracking-wide text-gray-700">
            Available Sizes
          </p>

          <span className="text-xs font-medium text-gray-400">
            {productDetail?.sizes?.length} Options
          </span>
        </div>

        <div className="flex flex-wrap gap-2">

          {productDetail?.sizes?.map((item) => (

            <div
              key={item._id}
              className="flex items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50/70 px-3 py-2.5 transition hover:border-indigo-400 hover:bg-indigo-100"
            >

              <span className="text-sm font-extrabold text-indigo-700">
                {item.size}
              </span>

              <span className="text-xs font-medium text-gray-500">
                ({item.stock})
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Button */}
      {
        context?.user?.role==='seller'&& <button
          onClick={()=>{
            updateHandle(productDetail._id)
            
            
          }}
          className="w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
        >
          Update Product
        </button>
      }
     

    </div>
  </div>

  </div>

</div>
);
}

export default ProductDetails