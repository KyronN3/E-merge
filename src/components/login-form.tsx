import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useAuthService } from "@/Service/Auth-Service";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schema/Auth-schema";
import type { LoginField } from "@/type/Auth-type";
import type { LoginErrorResponse } from "@/type/Auth-type";

export function LoginForm() {
  const { Login } = useAuthService();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginField>({
    resolver: zodResolver(LoginSchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<LoginField> = async (data: LoginField) => {
    const response = await Login(data);

    if (!response?.success) {
      const res = response as LoginErrorResponse;
      setError("root", { message: res.message || "Login failed" });
    } else {
      window.location.href = "/";
    }
  };
  return (
    <form
      className={cn("flex flex-col gap-6")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            type="email"
            {...register("email")}
            placeholder="m@example.com"
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            type="password"
            {...register("password")}
            placeholder="****************"
          />
          {errors.root && (
            <div className="text-red-600">{errors.root.message}</div>
          )}
        </Field>
        <Field>
          <Button type="submit">
            {isSubmitting ? (
              <span className="loading loading-infinity loading-lg" />
            ) : (
              "Login"
            )}
          </Button>
        </Field>
        <FieldSeparator>
          Don&apos;t have an account?{" "}
          <Link to="/auth/signup" className="underline underline-offset-4">
            Sign up
          </Link>
        </FieldSeparator>
      </FieldGroup>
    </form>
  );
}
