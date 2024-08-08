import React from 'react'
import LoginForm from "../../forms/LoginForm";
import { Poppins } from "next/font/google";
import Link from 'next/link';

const poppins = Poppins({ subsets: ["latin"], weight:[ "400","500","600","700","800","900"] });

const Login = () => {
  return (
    <div className='flex flex-row gap-2 justify-center px-44 pt-20 pb-32 min-h-screen'>
      <div className='flex flex-1'>

      </div>
      <div className="flex flex-1 flex-col gap-6 px-20">
        <div className={`${poppins.className} text-center font-extrabold text-3xl`}>
          Welcome Back,
        </div>
        <div className="flex items-center">
          <div className="flex flex-1 bg-gray-500 h-[1px]"></div>
          <div className="text-gray-500 flex px-6 justify-center text-sm">
            Or Sign Up with Email
          </div>
          <div className="flex flex-1 bg-gray-500 h-[1px]"></div>
        </div>
        <LoginForm/>
        <div className="text-gray-500 text-sm">
         Don't have an account?{" "}
         <Link href={"/auth/signup"}>
          <span className="text-[#08063af8] font-bold cursor-pointer pl-1">
            Sign Up
          </span>{" "}
         </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Login
