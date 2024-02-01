export {};

import "next-auth";
import { LoginResponseSchema } from "./loginResponseSchema";

declare module "next-auth" {
  export interface User extends LoginResponseSchema {}
  export interface JWT {
    token?: string;
    expiresAt?: number;
  }

  export interface Session {
    token?: string;
    expiresAt?: number;
    userId?: string;
    email?: string;
    username?: string;
    fullName?: string;
  }
}

declare global {
  var apiStorage: Record<string, unknown> | undefined;
  var prisma: PrismaClient | undefined;
}
