"use client";
import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const LoginForm = () => {
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

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(errors);
    console.log("the login info is", data);
  };
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <Input 
        labelname="Email Address"
        type="text"
        placeholder="Enter your email address"
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
      <Button name="Login" />
    </form>
  );
};

export default LoginForm;
