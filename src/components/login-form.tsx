import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useAuthService } from "@/Service/Auth-Service";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schema/Auth-schema";
import type { SubmitHandler } from "react-hook-form";
import type { LoginErrorResponse } from "@/type/Axios-type";
import type { LoginField } from "@/type/Auth-type";

export function LoginForm() {
  const { Login } = useAuthService();
  const reload = useNavigate();

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
      reload(0);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          {/* Form Starts Here */}
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance">
                  Login to your TourGo account
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  type="text"
                  {...register("email")}
                  placeholder="m@example.com"
                />
                {errors.email && (
                  <div className="text-red-600"> {errors.email.message}</div>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input {...register("password")} type="password" required />
                {errors.password && (
                  <div className="text-red-600">{errors.password.message}</div>
                )}
              </Field>
              <Field>
                <Button type="submit" className="cursor-pointer w-full">
                  {isSubmitting ? (
                    <span className="loading loading-infinity loading-lg"></span>
                  ) : (
                    "Login"
                  )}
                </Button>
                <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card" />
                {errors.root && (
                  <div className="text-red-600 text-center">
                    {errors.root.message}
                  </div>
                )}
              </Field>

              <FieldDescription className="text-center">
                Don&apos;t have an account? <a href="#">Sign up</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          {/* Form Ends Here */}
          <div className="bg-muted relative hidden md:block">
            <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
