import type { LoginResponse, SignupResponse } from "@/type/Auth-type";
import type { SetUser, UserStore } from "@/type/Store-type";

export const useUserStore = (): UserStore => {
    const setUser: SetUser<LoginResponse | SignupResponse> = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
    }

    const getUser = (): LoginResponse | null => {
        const user = localStorage.getItem("user");
        if (!user || user === undefined) {
            return null;
        }
        try {
            return JSON.parse(user) as LoginResponse;
        } catch {
            return null;
        }
    }

    const getToken = (): string | null => {
        const data = getUser();
        if (!data) {
            return null
        }
        return data.token;
    }

    const getRole = (): string | null => {
        const data = getUser();
        if (!data) {
            return null;
        }
        return data.role
    }

    const clearUser = (): void => {
        localStorage.removeItem("user");
    }

    return { setUser, getUser, clearUser, getRole, getToken }

}