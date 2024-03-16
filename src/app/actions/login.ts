"use server";

import { signIn } from "@/auth";
import { LoginRequestSchema } from "@/models/loginRequestSchema";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const Login = async (requestSchema: LoginRequestSchema) => {
  try {
    const userData = await signIn("credentials", {
      redirect: true,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
      username: requestSchema.username,
      password: requestSchema.password,
    });
    return { success: true, userData };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
