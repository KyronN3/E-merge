import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { SignupField } from "@/type/Auth-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "@/schema/Auth-schema";
import { useAuthService } from "@/Service/Auth-Service";

export function SignupForm() {
  const { Signup, Login } = useAuthService();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignupField>({
    resolver: zodResolver(SignupSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<SignupField> = async (data: SignupField) => {
    const response = await Signup(data);

    if (!response?.success) {
      const res = response as { success: boolean; message: string };
      setError("root", { message: res.message });
    } else {
      const { email, password } = data;
      const response = await Login({ email: email, password: password });
      if (response) {
        window.location.href = "/";
      } else {
        setError("root", { message: "Something went wrong in Registering" });
      }
    }
  };

  return (
    // Form Start here
    <form
      className={cn("flex flex-col gap-6")}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Username</FieldLabel>
          <Input type="text" {...register("username")} placeholder="username" />
          {errors.username && (
            <div className="text-red-600">{errors.username.message}</div>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            type="email"
            {...register("email")}
            placeholder="m@example.com"
          />
          {errors.email && (
            <div className="text-red-600">{errors.email.message}</div>
          )}
          <FieldDescription>
            We&apos;ll use this to contact you. We will not share your email
            with anyone else.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            type="password"
            {...register("password")}
            placeholder="************"
          />
          {errors.password && (
            <div className="text-red-600">{errors.password.message}</div>
          )}
          <FieldDescription>
            Must be at least 6 characters long.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
          <Input
            type="password"
            {...register("password_confirmation")}
            placeholder="************"
          />
          {errors.password_confirmation && (
            <div className="text-red-600">
              {errors.password_confirmation.message}
            </div>
          )}
          <FieldDescription>Please confirm your password.</FieldDescription>
        </Field>
        {errors.root && (
          <div className="text-red-600">{errors.root.message}</div>
        )}
        <Field>
          <Button
            className="cursor-pointer"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="loading loading-infinity loading-lg" />
            ) : (
              "Create Account"
            )}
          </Button>
        </Field>
        <FieldDescription className="px-6 text-center">
          Already have an account? <Link to="/auth/login">Sign in</Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}
