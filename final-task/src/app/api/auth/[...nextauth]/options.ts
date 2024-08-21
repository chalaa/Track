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
        if (!res.ok) {
          throw new Error(user.message);
        }
        return {
          id:user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          profileComplete: user.profileComplete,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user }:any){
        return true
    },

    async jwt({ token, user,}:any){
        token = {...token,
            ...user
        }

        return token
    },

    async session({ session, token }:any){
        session = {
          ...session,
          ...token
        }
        return session
    }

}
};

export default NextAuth(option);