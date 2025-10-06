import { type LoginResponse } from "@/type/Axios-type"
import type { SetUser, UserStore } from "@/type/Store-type";

export const useUserStore = (): UserStore => {
    const setUser: SetUser<LoginResponse> = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
    }

    const getUser = (): LoginResponse | null => {
        const user = localStorage.getItem("user");
        if (!user || user === "undefined") {
            return null;
        }
        try {
            return JSON.parse(user) as LoginResponse;
        } catch {
            return null;
        }
    }

    const getRole = (): string | void => {
        const data = getUser();
        return data?.role
    }

    const clearUser = (): void => {
        localStorage.removeItem("user");
    }

    return { setUser, getUser, clearUser, getRole }

}