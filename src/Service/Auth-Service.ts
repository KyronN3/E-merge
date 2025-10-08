import type { LogoutResponse, AuthService, LoginAction, SignupAction, SignupResponse } from "@/type/Auth-type";
import type { LoginResponse, LoginErrorResponse, LogoutAction } from "@/type/Auth-type";
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
            console.error("Login error:", err.message || error);
            return { success: err.success, message: err.message || "An unknown error occurred" };
        }
    }

    const Signup: SignupAction = async (data) => {
        try {
            await axiosAPI.post<SignupResponse>("/auth/register", data);
            return { success: true }
        } catch (error: unknown) {
            const err = error as { message: string }
            console.error("Signup error:", err.message || error);
            return { success: false, message: err.message }
        }
    }

    const Logout: LogoutAction = async () => {
        try {
            const response = await axiosAPI.post<LogoutResponse>("/auth/logout")
            if (response.data.success) {
                localStorage.clear();
            }
            return { success: response.data.success, message: response.data.message }
        } catch (error: unknown) {
            const err = error as { success: boolean, message: string }
            console.error("LogoutService error:", error)
            return { success: err.success, message: err.message }
        }
    }

    return { Login, Logout, Signup };
}
