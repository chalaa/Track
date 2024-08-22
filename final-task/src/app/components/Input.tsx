import React from "react";

interface InputProps {
  id:string;
  labelname: string;
  type: string;
  placeholder: string;
  name: string;
  register: any;
  error?: string;
}
const Input = ({ labelname, type, id, placeholder, name,error,register }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="" className="text-sm font-semibold">
        {labelname}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        className="border border-gray-300 rounded-md p-2 text-sm"
        {...register(name)}
      /> 
      {error && <span className="text-red-600 text-xs flex justify-center">
            {error}
          </span>}
    </div>
  );
};

export default Input;
