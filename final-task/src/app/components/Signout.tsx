"use client"
import React from 'react'
import { signOut } from "next-auth/react";


const Signout = () => {
  return (
    <button id='logout' onClick= {()=>signOut()}>signout</button>
  )
}

export default Signout
