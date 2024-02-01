import NextAuth, { User } from "next-auth";
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
      authorize: async (credentials, req) => {
        if (!credentials) return null;
        const { username, password } = credentials;
        if (username && password) {
          try {
            var rowBody = JSON.stringify({
              username: username,
              password: password,
            });

            const response = await fetch(apiRoutes.login, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              redirect: "follow",
              body: rowBody,
            });
            if (response) {
              const result = (await response.json()) as LoginResponseSchema;
              console.log("debug result", result);
              if (result) return result;
              else return null;
            } else return null;
          } catch (error) {
            console.log("debug error", error);
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
      console.log("token", param.token);
      return param.token;
    },
    async session(param) {
      console.log("token", param.session);
      return param.session;
    },
  },
  debug: true,
});
