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
      authorize: async (credentials, req) => {
        if (!credentials) return null;
        const { username, password } = credentials;
        if (username && password) {
          try {
            const response = await fetch(apiRoutes.login, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              redirect: "follow",
              body: JSON.stringify({ username, password }),
            });
            if (response) {
              const result = (await response.json()) as LoginResponseSchema;
              if (result && result.isSuccess) {
                return {
                  ...result,
                  id: result.user?.id,
                  name: `${result.user?.firstName} ${result.user?.lastName}`,
                  email: result.user?.email,
                };
              } else return null;
            } else return null;
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
      if (param.user && param.user.isSuccess) {
        param.token.sub = param.user.id;
        param.token.token = param.user.message;
        param.token.name = param.user.name;
        param.token.email = param.user.email;
        param.token.username = param.user.user?.userName;
        if (param.user.expiresAt) {
          param.token.expiresAt = new Date(param.user.expiresAt).getTime();
        }
      }

      if (param.token.expiresAt && param.token.expiresAt < new Date().getTime()) {
        return null;
      }

      return param.token;
    },
    async session(param) {
      if ("token" in param) {
        param.session.token = param.token.token;
        if (param.token.expiresAt && param.token.expiresAt < new Date().getTime()) {
          return { expires: new Date().toString() };
        }
      }
      if ("user" in param) {
        if (param.session.user) {
          param.session.user.id = param.user.id;
          param.session.user.name = param.user.name;
          param.session.user.email = param.user.email;
          param.session.username = param.user.user?.userName;
        }
      }

      return param.session;
    },
  },
  debug: false,
});
