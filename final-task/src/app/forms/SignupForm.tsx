"use client";
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { register_user } from "../action/action";

const SignupForm = () => {
  const [error, setError] = useState("")
  const router = useRouter();
  const formSchema = z
    .object({
      name: z.string().min(3, { message: "name must be at least 3 character" }),
      email: z.string().email("Invalid Email"),
      password: z
        .string()
        .min(8, { message: "the password must be al least 8 characters" }),
      confirmPassword: z
        .string()
        .min(8, { message: "the password must be al least 8 characters" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Password confirmation doesn't much",
    });

  type FormType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormType) => {
    const res = await register_user(data);
    const user = await res.json();
    console.log("the signup respose is",res)
    if (res.ok && user) {
      router.push(`/auth/verifyemail/${data.email}`);
    } else {
      setError(user.message)
      console.log();
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      {error && <span className="flex justify-center text-red-700 text-xs">{error}</span>}
      <Input
        labelname="Full Name"
        type="input"
        placeholder="Enter your full name"
        name="name"
        register={register}
        error={errors.name?.message}
      />
      <Input
        labelname="Email Address"
        type="email"
        placeholder="Enter email address"
        name="email"
        register={register}
        error={errors.email?.message}
      />
      <Input
        labelname="Password"
        type="password"
        placeholder="Enter password"
        name="password"
        register={register}
        error={errors.password?.message}
      />
      <Input
        labelname="Confirm Password"
        type="password"
        placeholder="Enter password"
        name="confirmPassword"
        register={register}
        error={errors.confirmPassword?.message}
      />
      <Button name="Continue" />
    </form>
  );
};

export default SignupForm;
