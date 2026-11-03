import { useState } from "react"
import { useForm } from "react-hook-form"
import { useApi } from "../../shared/api"
import { useAuthContext } from "../../../context/Auth.context"
import { useNavigate } from "react-router"
import { useProductContext } from "../../../context/Product.context"

const productHook=()=>{

    const navigate=useNavigate()
    const productContext=useProductContext()
    const{productData,setProductData,}=productContext
    const [loading, setLoading] = useState(false)
    const context=useProductContext()

    const {register,reset,resetField,handleSubmit,formState:{errors}}=useForm()
    const [sizes, setSizes] = useState({size:'',stock:''})
    const [sizeArray, setSizeArray] = useState([])

    const api=useApi()
    const formData=new FormData()

    const [productDetail, setProductDetail] = useState({})

    

    const createProductHandle=async(data)=>{
         setLoading(true)
        //  console.log(context.updatedProduct);
        //  if(context.updatedProduct){
        //     data=context.updatedProduct
        //  }
        //  console.log(data);
         
        try {
            formData.append('title',data.title)
            formData.append('description',data.description)
            formData.append('sizes',JSON.stringify(sizeArray))
            formData.append('price',JSON.stringify({
                amount:data.amount,
                currency:data.currency
            }))    
            Array.from(data.images).forEach((image)=>formData.append('images',image))
            if (context.updatedProduct) {
                console.log('-->',context.updatedProduct);
                
                const res =await api.put(`/product/update/${context?.updatedProduct?._id}`,formData)
                console.log(res);
                alert('update successfully')
                return
                
            }
            const res =await api.post('/product',formData)
            

            alert('product created successfully')
            reset()

        } catch (error) {
            console.log(error);
            
        }finally{
            setLoading(false)
        }
       
     }

     const addSize=()=>{
        setSizeArray([...sizeArray,sizes])
        console.log(sizeArray);
        
     }

     const getAllProduct=async()=>{
        setLoading(true)
        try {
            const res=await api.get('/product/getAll')
            setProductData(res.data.data)
        } catch (error) {
            console.log(error);  
        }finally{
            setLoading(false)
        }
        
     }

     const getById=async(id)=>{
        
        const res = await api.get(`/product/get/${id}`)
        setProductDetail(res.data.data)
        return res 
     }
     const removeHandle=async(id)=>{
      const res = await api.delete(`/product/delete/${id}`)
      productContext.setProductData(productData=>productData.filter((p)=>p._id!==id))
     
    }

    const updateHandle=async(id)=>{

        const res=await getById(id)
        productContext?.setUpdatedProduct({...res.data.data})
        
        navigate('/main/create')
        
    }

    return{
        register,reset,handleSubmit,errors,createProductHandle,sizes, setSizes,addSize,resetField,loading,getAllProduct,productData,getById,productData,setProductData,removeHandle,updateHandle,productDetail,setProductDetail,
     }
}
export default productHook