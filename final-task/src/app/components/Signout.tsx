"use client"
import React from 'react'
import { signOut } from "next-auth/react";


const Signout = () => {
  return (
    <button onClick= {()=>signOut()}>signout</button>
  )
}

export default Signout
