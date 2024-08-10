import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const option: NextAuthOptions = {
    session:{
        strategy: "jwt"
    },
    pages: {
        signIn: "/auth/login",
      },
    secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },

      async authorize(credentials: any, req: any) {
        const email = credentials?.email;
        const password = credentials?.password;

        const res = await fetch("https://akil-backend.onrender.com/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        const user = data.data;
        console.log("the data is===============>", user,)
        if (!res.ok) {
          throw new Error(user.message);
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }:any){
        console.log("signed in data===============>",user)
        return true
    },

    async jwt({ token, user,}:any){
        console.log("jwt token initial===============>", token)
        console.log("the user data is ++++++++++++++>>>>>", user)
        token = {...token,
            ...user
        }

        console.log("jwt token after update===============>", token)

        return token
    },

    async session({ session, token }:any){
        console.log("session token initial===============>", session)
        console.log("the token data is ++++++++++++++>>>>>", token)
        session.user = token 

        console.log("session token after update===============>", session)

        return session
    }

}
};

export default NextAuth(option);