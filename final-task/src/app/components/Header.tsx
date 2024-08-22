import Link from "next/link";
import React from "react";
import SignOut from "../components/Signout";
import { get_user_session } from "../action/action";
const Header = async () => {
  const session = await get_user_session();
  return (
    <header className="flex flex-row justify-between">
      <div className="flex flex-row gap-5">
        <Link href="/Jobs"> Home </Link>
        <Link href={session ? `/savedJobs` : `/auth/login`}> Saved Jobs </Link>
      </div>
      <div>
        {session && (
          <div>
            <SignOut />
          </div>
        )}
        {!session && (
          <div className="flex flex-row gap-3">
            <Link href="/auth/signup">Signup</Link>
            <Link href="/auth/login">Login</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
