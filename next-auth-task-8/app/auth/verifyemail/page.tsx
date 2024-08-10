import React from "react";
import {InputOTPForm as VerifcationForm} from "../../components/VerificationForm";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight:[ "400","500","600","700","800","900"] });
interface IParams {
  params:{id:string} ;
}
const VerifyEmail = ({params}:IParams) => {
  

  console.log(params);
  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col gap-11 w-1/2 px-32 my-32">
        <div className={`${poppins.className} text-center font-bold text-3xl`}>
          Verify Email
        </div>
        <div className="text-gray-500 text-sm">
            we have sent a verification code to email address you provided. To
            complete the verification process please enter the verification code
            in the field below.
        </div>
        <div>
         <VerifcationForm />
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
