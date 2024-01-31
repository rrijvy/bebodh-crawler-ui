import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { apiRoutes } from "./routes";
import { LoginResponseSchema } from "./models/loginResponseSchema";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        if (!credentials) return null;
        const { username, password } = credentials;
        if (username && password) {
          try {
            const formData = new FormData();
            formData.append("username", username as string);
            formData.append("password", password as string);
            const response = await fetch(apiRoutes.login, {
              method: "POST",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              headers: {
                "Content-Type": "application/json",
              },
              redirect: "follow",
              referrerPolicy: "no-referrer",
              body: formData,
            });
            if (response) return response;
            else return null;
          } catch (error) {
            return null;
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt(param) {
      // console.log("token", param.token);
      return param.token;
    },
    async session(param) {
      return param.session;
    },
  },
});
