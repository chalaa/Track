import React from 'react'

interface ButtonProps {
  text: string
  color: string
  background:string;
}

const Button = ({text,color,background}:ButtonProps) => {
  return (
    <div className= {`rounded-3xl min-w-20 flex justify-center px-[1rem] py-[6px]  border-solid border-2 ${color} ${background}`}>
      <button>{text}</button>
    </div>
  )
}

export default Button
