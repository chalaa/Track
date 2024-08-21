import React from "react";

interface ButtonProps {
  name: string;
}
const Button = ({ name }: ButtonProps) => {
  return (
    <button className="bg-[#08063af8] py-3 rounded-3xl text-white text-4 w-full" type = "submit">
      {name}
    </button>
  );
};

export default Button;
