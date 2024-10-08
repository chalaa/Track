"use client";
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
const SignupForm = () => {

  const router = useRouter()
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

  const onSubmit = async (data:FormType) => {
    console.log("the signup data is ",data)

    try {
    const res = await fetch("https://akil-backend.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(data)
    });

    const user = await res.json();
    console.log(user)

    if (res.ok && user) {
     
      router.push(`/auth/verifyemail?email=${data.email}`)
    } else {
      console.log(user.message);
    }
  }
  catch(error){
    console.log(error)
  }
  };
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
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
