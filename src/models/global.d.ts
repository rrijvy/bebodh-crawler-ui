export {};

import "next-auth";
import "next-auth/jwt";
import { LoginResponseSchema } from "./loginResponseSchema";

declare module "next-auth" {
  export interface User extends LoginResponseSchema {}

  export interface Session {
    token?: string;
    username?: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    username?: string;
    token?: string;
    expiresAt?: number;
  }
}

declare global {
  var apiStorage: Record<string, unknown> | undefined;
  var prisma: PrismaClient | undefined;
}
