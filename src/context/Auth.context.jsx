import { createContext, useContext, useEffect, useState } from "react";
import { useApi } from "../modules/shared/api";

const AuthContext =createContext()

export const ContextProvider=({children})=>{
    

    const api=useApi()

    const [user, setUser] = useState()
    const [accessToken, setAccessToken] = useState()
    const [loading, setLoading] = useState(true)

    const fetchUser=async()=>{

        try {
            const res =await api.get('/auth/getMe')
            setUser(res.data.data.user)
            setAccessToken(res.data.data.accessToken)
            
        } catch (error) {
           console.log(error);
                  
        }finally{
            setLoading(false)
        }
    }

    
    const val={accessToken, setAccessToken, loading, setLoading, user, setUser,fetchUser}

   
    useEffect(() => {
      fetchUser()
    }, [])
    




    return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>
}

export const useAuthContext=()=>{
    const context = useContext(AuthContext)

    return context
}