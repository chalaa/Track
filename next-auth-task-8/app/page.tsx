import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="bg-gray-500 flex gap-5 justify-end pr-3">
        <Link href={"/auth/signup"}>signUp</Link>
        <Link href={"/auth/login"}>LogIn</Link>
        <Link href={"/auth/verifyemail"}>verifyemail</Link>
      </nav>
    </main>
  );
}
