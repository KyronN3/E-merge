import { z } from "zod";
import { LoginSchema } from "@/schema/Auth-schema";
import { type LoginErrorResponse } from "./Axios-type";


export type LoginField = z.infer<typeof LoginSchema>;
export type LoginAction = (field: LoginField) => Promise<LoginErrorResponse | { success: boolean } | void>;

export interface AuthService {
    Login: LoginAction;
}