import axios from "axios"
import { useAuthContext } from "../../context/Auth.context"

export const useApi = () => {

const context = useAuthContext()

const api = axios.create({
    baseURL: "https://mern-backend-lake-eight.vercel.app/api",
    withCredentials: true
})

api.interceptors.request.use((config) => {

    if (context?.accessToken) {
        config.headers.Authorization = `Bearer ${context.accessToken}`
    }

    return config
})

api.interceptors.response.use(
    response => response,

    async (error) => {

        if (error.response?.status === 401 && !error.config._retry) {

            error.config._retry = true

            try {

                const res = await axios.post(
                    "https://mern-backend-lake-eight.vercel.app/api/auth/refresh",
                    {},
                    { withCredentials: true }
                )

                const newAccessToken = res.data.data.accessToken

                context?.setAccessToken(newAccessToken)

                error.config.headers.Authorization = `Bearer ${newAccessToken}`

                return api(error.config)

            } catch (refreshError) {

                context?.setAccessToken(null)

                return Promise.reject(refreshError)
            }
        }

        return Promise.reject(error)
    }
)

return api


}
