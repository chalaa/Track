"use client"
import Image from "next/image";
import Link from "next/link";
import {signIn} from "next-auth/react"

export default function Home() {
  return (
    <main>
      <nav className="bg-gray-500 flex gap-5 justify-end pr-3">
        <Link href={"/auth/signup"}>signUp</Link>
        <button onClick={()=>{
          signIn()
        }}>Login</button>
        <Link href={"/auth/verifyemail"}>verifyemail</Link>
      </nav>
    </main>
  );
}
