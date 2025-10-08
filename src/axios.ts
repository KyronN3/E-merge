import axios, { AxiosError } from "axios";
import { type APIAxiosInstance, type APIInternalAxiosRequestConfig, type APIAxiosResponse } from "@/type/Axios-type";

export const axiosAPI: APIAxiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    timeout: 60000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
})

axiosAPI.interceptors.request.use(
    (config: APIInternalAxiosRequestConfig): APIInternalAxiosRequestConfig => {
        const token: string | undefined | null = localStorage.getItem("user");
        if (token !== undefined && token !== null && config.headers) {
            config.headers['Authorization'] = `Bearer ${JSON.parse(token).token as string}`;
        }
        return config
    },
    (error: AxiosError) => {
        // errors pass through components
        return Promise.reject(error);
    }
)

axiosAPI.interceptors.response.use(
    (response: APIAxiosResponse): APIAxiosResponse => {
        return response;
    },
    (error: AxiosError) => {
        switch (error.response?.status) {
            case 401:
                //Unauthorized
                break;
            case 419:
                // Token Expired
                break;
            case 400:
                // Bad Request
                break;
        }
        // errors pass through components
        return Promise.reject(error?.response?.data);
    }
)