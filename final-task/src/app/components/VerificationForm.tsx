"use client";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
// import { Button } from "@/components/ui/button";
import Button from "../components/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { verify_user } from "../action/action";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Invalid OTP",
  }),
});

interface verificationProps {
  email:string
}


export function InputOTPForm({email}:verificationProps) {

  const [error, setError] = useState("")
  const router = useRouter()
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("the verified email is", email,typeof email,data.pin)

    const split = email.split("%40")
    email = split[0]+"@"+split[1]
    if (email){
      const res = await verify_user(email,data.pin)
      console.log("the res status is+++++++",res)
      if (res.success){
        signIn()
      }
      else{
        setError(res.message)
      }
    }
    else{
      setError("Invalid OTP")
    }
  }

  return (
    <div className="flex flex-col gap-5 justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          {error && <span className="flex justify-center text-red-700 text-xs ">{error}</span>}
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-5">
                <FormControl>
                  <InputOTP maxLength={4} {...field}>
                    <InputOTPGroup className="flex flex-row gap-3 w-full">
                      <InputOTPSlot
                        index={0}
                        className="flex flex-1 border border-gray-500 rounded-md"
                      />
                      <InputOTPSlot
                        index={1}
                        className="flex flex-1 border border-gray-500 rounded-md"
                      />
                      <InputOTPSlot
                        index={2}
                        className="flex flex-1 border border-gray-500 rounded-md"
                      />
                      <InputOTPSlot
                        index={3}
                        className="flex flex-1 border border-gray-500 rounded-md"
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription className="flex justify-center text-sm">
                  You can request to 
                    <span className="text-[#08063af8] font-semibold cursor-pointer px-1">
                      Resend code
                    </span>
                    in
                    <span className="text-[#08063af8] font-semibold px-1">
                      
                      0:30
                    </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button name="Continue"></Button>
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
    </div>
  );
}
