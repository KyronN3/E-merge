import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { LoginField } from "@/type/Auth-type";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schema/Auth-schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
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
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", { message: `Invalid Credential: ${error}` });
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6")}>
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your email and password below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Form-start Here */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      {...register("email")}
                      placeholder="e@email.com"
                    />

                    {errors.email && (
                      <div className="text-red-600">{errors.email.message}</div>
                    )}
                  </div>

                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input
                      type="password"
                      placeholder="*********"
                      {...register("password")}
                    />

                    {errors.password && (
                      <div className="text-red-600">
                        {errors.password.message}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="loading loading-infinity loading-lg"></span>
                      ) : (
                        "Login"
                      )}
                    </Button>
                  </div>
                </div>
                {errors.root && (
                  <div className="pt-4 text-center text-sm text-red-600">
                    {errors.root.message}
                  </div>
                )}
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <a href="#" className="underline underline-offset-4">
                    Signup
                  </a>
                </div>
              </form>
              {/* Form-end Here */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
