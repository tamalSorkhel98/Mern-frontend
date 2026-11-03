import React, { useEffect, useState } from 'react'
import productHook from './hook/productHook'
import { useProductContext } from '../../context/Product.context'

const CreateProducts = () => {

  const {register,handleSubmit,errors,createProductHandle,sizes,setSizes,addSize,resetField,reset,loading}=productHook()

const {updatedProduct}=useProductContext()
console.log(updatedProduct);


  useEffect(() => {
    if(updatedProduct){
      reset({
        title:updatedProduct.title,
        description:updatedProduct.description,
        price:updatedProduct.price
      })
    }
  }, [updatedProduct,reset])


  return (
   <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-4 py-10 sm:px-6 lg:px-8">

  <form
    onSubmit={handleSubmit(createProductHandle)}
    className="mx-auto max-w-3xl space-y-7 rounded-2xl border border-white bg-white p-5 shadow-xl shadow-indigo-100/50 sm:p-8 lg:p-10"
  >

    <div className="border-b border-gray-100 pb-5">
      <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
        Create Product
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        Add product details, images, sizes and pricing.
      </p>
    </div>

    {/* Title */}
    <div className="space-y-2">
      <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
        Product Title
      </label>

      <input
        {...register('title')}
        type="text"
        id="title"
        required
        name="title"
        placeholder="Enter product title"
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
      />
    </div>

    {/* Description */}
    <div className="space-y-2">
      <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
        Description
      </label>

      <textarea
        {...register('description')}
        required
        id="description"
        name="description"
        rows="4"
        placeholder="Describe your product..."
        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
      ></textarea>
    </div>

    {/* Images */}
    <div className="space-y-2">
      <label htmlFor="images" className="block text-sm font-semibold text-gray-700">
        Product Images
      </label>

      <div className="rounded-xl border-2 border-dashed border-indigo-200 bg-indigo-50/50 p-5 transition hover:border-indigo-400">
        <input
          {...register('images')}
          required
          type="file"
          id="images"
          name="images"
          multiple
          accept="image/*"
          className="w-full cursor-pointer text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:px-4 file:py-2.5 file:font-semibold file:text-white hover:file:bg-indigo-700"
        />

        <p className="mt-3 text-xs text-gray-500">
          Select product images from your device.
        </p>
      </div>
    </div>

    {/* Sizes and Stock */}
    <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-4 sm:p-6">

      <div className="mb-5">
        <h3 className="text-lg font-bold text-gray-800">
          Size & Inventory
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Configure product sizes and available stock.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

        <div className="space-y-2">
          <label htmlFor="size" className="block text-sm font-semibold text-gray-700">
            Size
          </label>

          <select
            {...register('size')}
            onChange={(e) => setSizes({ ...sizes, size: e.target.value })}
            
            id="size"
            name="size"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
          >
            <option value="">Select Size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="stock" className="block text-sm font-semibold text-gray-700">
            Stock
          </label>

          <input
            {...register('stock')}
            onChange={(e) => setSizes({ ...sizes, stock: e.target.value })}
            type="number"
            
            id="stock"
            name="stock"
            placeholder="Available quantity"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
          />
        </div>

      </div>

      <button
        onClick={() => {
          console.log('another size added');
          resetField('size')
          resetField('stock')
          addSize();
        }}
        type="button"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-purple-200 bg-white px-4 py-3 font-semibold text-purple-700 transition hover:bg-purple-600 hover:text-white sm:w-auto"
      >
        <span className="text-xl">+</span>
        Add Size & Stock, or Add more
      </button>

    </div>

    {/* Pricing */}
    <div>
      <h3 className="mb-5 text-lg font-bold text-gray-800">
        Pricing Details
      </h3>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

        <div className="space-y-2">
          <label htmlFor="amount" className="block text-sm font-semibold text-gray-700">
            Amount
          </label>

          <input
            {...register('amount')}
            type="number"
            required
            id="amount"
            name="amount"
            placeholder="Enter price"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="currency" className="block text-sm font-semibold text-gray-700">
            Currency
          </label>

          <select
            {...register('currency')}
            id="currency"
            name="currency"
            required
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
          >
            <option value="">Select Currency</option>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
          </select>
        </div>

      </div>
    </div>

    {/* Submit */}
    <div className="border-t border-gray-100 pt-6">
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 font-bold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl active:translate-y-0"
      >
        {updatedProduct?'Update Product':
        loading?'loading...':'Create Product →'}
      </button>
    </div>

  </form>
</div>
  )
}

export default CreateProducts