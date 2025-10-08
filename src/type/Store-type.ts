import type { LoginResponse, SignupResponse } from "./Auth-type";
import type { BusinessColumn, BusinessResponse } from "./Business-type";

export type SetUser<T> = (data: T) => void;
export type SetBusiness<T> = (data: T) => void;

export interface UserStore {
    setUser: SetUser<LoginResponse | SignupResponse>;
    getUser: () => LoginResponse | null;
    getRole: () => string | null;
    getToken: () => string | null;
    clearUser: () => void;
}

export interface BusinessStore {
    setBusiness: SetBusiness<BusinessResponse>;
    getBusiness: () => BusinessColumn[] | null;
    clearBusiness: () => void;
}