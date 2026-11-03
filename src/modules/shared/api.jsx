import axios from "axios"
import { useAuthContext } from "../../context/Auth.context"

export const useApi=()=>{

    const context=useAuthContext()
    
    const api=axios.create({
        baseURL:"http://localhost:5173/api",
        withCredentials:true
    })

    api.interceptors.request.use((config)=>{

        config.headers.Authorization=`Bearer ${context?.accessToken}`

        return config
    })

    api.interceptors.response.use(response=>response,
        async(error)=>{

            if(error.response.status===401){
               try {
                    const res =await axios.post('/api/auth/refresh',{},{withCredentials:true})

                    context?.setAccessToken(res.data.data.accessToken)

                    error.config.headers.Authorization=`Bearer ${res.data.data.accessToken}`

                    return axios(error.config)
               } catch (error) {
                    return Promise.reject(error)
               }
                
            }

            return Promise.reject(error)
        }
    )

    return api
}