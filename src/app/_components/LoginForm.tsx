"use client";

import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type FormData = z.infer<typeof formSchema>;

const LoginForm = () => {
  const router = useRouter();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [fillCredentials, setFillCredentials] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (fillCredentials) {
      reset({
        email: "test@somewhere.com",
        password: "qwerty",
      });
    } else {
      reset({
        email: "",
        password: "",
      });
    }
  }, [fillCredentials, reset]);

  const onSubmit = (data: FormData) => {
    setIsLoggingIn(true);
    console.log("Submitting:", data);

    // Mock authentication logic
    if (data.email === "test@somewhere.com" && data.password === "qwerty") {
      const mockToken = "jwt.test@somewhere.com.authenticated";
      localStorage.setItem("token", mockToken);
      router.push("/dashboard");
    } else {
      setError("password", {
        type: "manual",
        message: "Incorrect email or password. Please try again.",
      });
      setIsLoggingIn(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 mb-4 w-full space-y-4"
      aria-label="Login Form"
    >
      {/* Email */}
      <Input
        id="email"
        label="Email"
        placeholder="Enter your email address"
        {...register("email")}
        error={errors.email?.message}
      />

      {/* Password */}
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        {...register("password")}
        error={errors.password?.message}
      />

      <Button type="submit" disabled={isLoggingIn} className="w-full">
        {isLoggingIn ? "Logging in..." : "Log in"}
      </Button>

      {!fillCredentials && (
        <p
          className="cursor-pointer text-sm"
          onClick={() => setFillCredentials((prev) => !prev)}
        >
          Click to auto-fill credentials
        </p>
      )}
    </form>
  );
};

export default LoginForm;
