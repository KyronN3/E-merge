import { z } from "zod";
import { LoginSchema, SignupSchema } from "@/schema/Auth-schema";

export interface LoginResponse {
    success: boolean;
    data: { username: string, email: string };
    role: string;
    token: string;
    loginAt?: string;
}

export interface LogoutResponse {
    success: boolean;
    message: string;
}

export interface SignupResponse {
    success: boolean;
    data: { username: string, email: string };
    role: string;
    createAt?: string;
}

export interface LoginErrorResponse {
    success: boolean;
    message: string;
    requestAt?: string;
}

export type LoginField = z.infer<typeof LoginSchema>;
export type SignupField = z.infer<typeof SignupSchema>;

export type SignupAction = (field: SignupField) => Promise<SignupResponse | { success: boolean, message: string } | { success: boolean } | void>;
export type LoginAction = (field: LoginField) => Promise<LoginErrorResponse | { success: boolean } | void>;
export type LogoutAction = () => Promise<LogoutResponse | { success: boolean, message: string } | null>;

export interface AuthService {
    Login: LoginAction;
    Logout: LogoutAction;
    Signup: SignupAction;
}