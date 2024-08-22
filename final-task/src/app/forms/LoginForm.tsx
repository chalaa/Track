"use client";
import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [error,setError] = useState("");
  const router = useRouter();
  const formSchema = z.object({
    email: z.string().email("Invalid Email"),
    password: z
      .string()
      .min(8, { message: "the password must be al least 8 characters" }),
  });
  type FormType = z.infer<typeof formSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormType> =  async (data) => {
    const res = await  signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.error) {
      setError("invalid Credential");
    } 
    if (res?.ok){
      router.push("/Jobs");
    }
    
  };
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      {error && <p className="text-red-500 flex justify-center text-xs">{error}</p>}
      <Input 
        id="email"
        labelname="Email Address"
        type="text"
        placeholder="Enter your email address"
        name="email"
        register={register}
        error={errors.email?.message}
      />
      <Input
      id="password"
        labelname="Password"
        type="password"
        placeholder="Enter password"
        name="password"
        register={register}
        error={errors.password?.message}
      />
      <Button name="Login" />
    </form>
  );
};

export default LoginForm;
