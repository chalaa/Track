"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Invalid OTP",
  }),
});

export function InputOTPForm() {

  const alurl = window.location.href;
  const url = new URL(alurl);
  const email = url.searchParams.get("email");


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const res = await fetch("https://akil-backend.onrender.com/verify-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        email: email,
        otp: data.pin
      })
    });

    console.log(res)
  }

  return (
    <div className="flex flex-col gap-5 justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          
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
