import { z } from "zod";
import { LoginSchema } from "@/schema/Auth-schema";

export type LoginField = z.infer<typeof LoginSchema>;