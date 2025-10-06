import { type AuthService, type LoginAction } from "@/type/Auth-type";
import { type LoginErrorResponse, type LoginResponse } from "@/type/Axios-type";
import { useUserStore } from "@/store/User-store";
import { axiosAPI } from "@/axios";


export const useAuthService = (): AuthService => {
    const { setUser } = useUserStore();

    const Login: LoginAction = async (data) => {
        try {
            const response = await axiosAPI.post<LoginResponse>("/auth/login", data);
            setUser(response.data);
            return { success: true };
        } catch (error: unknown) {
            const err = error as LoginErrorResponse;
            console.error("LoginService error:", err.message || error);
            return { success: err.success, message: err.message || "An unknown error occurred" };
        }
    }

    return { Login };
}
