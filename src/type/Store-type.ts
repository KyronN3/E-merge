import type { LoginResponse } from "./Axios-type";

export type SetUser<T> = (data: T) => void;

export interface UserStore {
    setUser: SetUser<LoginResponse>;
    getUser: () => LoginResponse | null;
    getRole: () => string;
    clearUser: () => void;
}