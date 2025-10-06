export type APIAxiosInstance = import("axios").AxiosInstance;
export type APIInternalAxiosRequestConfig = import("axios").InternalAxiosRequestConfig;
export type APIAxiosResponse<T = unknown> = import("axios").AxiosResponse<T>;


export interface LoginResponse {
    success: boolean;
    data: { email: string };
    role: string;
    token: string;
    date: string
}

export interface LoginErrorResponse {
    success: boolean;
    message: string;
    requestAt?: string;
}