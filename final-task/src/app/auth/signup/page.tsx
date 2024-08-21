import React from "react";
import Image from "next/image";
import SignupForm from "@/app/forms/SignupForm";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Singup = () => {
  return (
    <div className="flex justify-center pt-9 min-h-screen pb-16">
      <div className="flex flex-col gap-6 w-1/2 px-36">
        <div className={`${poppins.className} text-center font-bold text-3xl`}>
          Sign Up Today!
        </div>
        <div className="flex gap-2 justify-center rounded-lg border-2 py-1 items-center border-gray-500">
          <Image src="/Images/google.png" alt="signup" width={35} height={35} />
          <div>Sign Up with Google</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-1 bg-gray-500 h-[1px]"></div>
          <div className="text-gray-500 flex justify-center text-sm">
            Or Sign Up with Email
          </div>
          <div className="flex flex-1 bg-gray-500 h-[1px]"></div>
        </div>
        <SignupForm />
        <div className="flex flex-row gap-2">
          <p>Already have an account?</p>
          <Link href={"/auth/login"}>
          <span className="text-[#08063af8] font-bold cursor-pointer">
            Login
          </span>{" "}
          </Link>
        </div>
        <div className="text-gray-500 text-sm">
          By clicking 'Continue'. you acknowledge that you have read and
          accepted our <span className="text-[#08063af8] font-semibold">Terms of Service</span>{" "}
          and <span className="text-[#08063af8] font-semibold">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Singup;
