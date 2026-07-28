import { Navigate } from "react-router";
import { useForm } from "react-hook-form";

import { Mail, Lock } from "lucide-react";

import FormField from "../../ui/FormField";
import CtaButton from "../../ui/CtaButton";

import { useLogin } from "../../../hooks/useLogin";
import { useUser } from "../../../hooks/useUser";

export default function AdminLogin() {
  const { isAuthenticated } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { login, isLoading } = useLogin();

  function onSubmit(data) {
    login(data, {
      onSettled: () => {
        reset();
      },
    });
  }

  if (isAuthenticated) return <Navigate to="/admin/dashboard" />;

  return (
    <div className="col-span-1 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 w-[50%] p-10 rounded-lg bg-white shadow-md"
      >
        <div className="flex flex-col items-center">
          <h1 className="heading-sm">Admin Login</h1>
          <p className="text-gray-dark">Enter your credentials to continue</p>
        </div>
        <div className="flex flex-col gap-6">
          <FormField
            inputType="email"
            label="Email Address"
            id="email"
            placeholder="admin@gmsolutions.co.uk"
            icon={<Mail className="text-gray-dark" size={16} aria-hidden />}
            {...register("email", {
              required: "Please enter your full email address.",
            })}
            errors={
              errors.email && (
                <p className="input-error">{errors.email.message}</p>
              )
            }
          />
          <FormField
            inputType="password"
            label="Password"
            id="password"
            placeholder="Enter Your Password"
            icon={<Lock className="text-gray-dark" size={16} aria-hidden />}
            {...register("password", {
              required: "Please enter your password.",
            })}
            errors={
              errors.password && (
                <p className="input-error">{errors.password.message}</p>
              )
            }
          />
        </div>

        <div>
          <CtaButton variant="primary" isFullWidth disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log in"}
          </CtaButton>
        </div>
      </form>
    </div>
  );
}
