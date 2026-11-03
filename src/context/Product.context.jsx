import { createContext, useContext, useState } from "react";

const Context=createContext()

export const ProductContextProvider=({children})=>{
    const [productData, setProductData] = useState([])
    const [updatedProduct, setUpdatedProduct] = useState(null)
    
    
    const val={productData,setProductData,updatedProduct,setUpdatedProduct}
    return <Context.Provider value={val}>{children}</Context.Provider>
}

export const useProductContext=()=>{
    const context=useContext(Context)

    return context
}