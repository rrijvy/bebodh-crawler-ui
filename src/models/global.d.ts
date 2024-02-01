export {};

import "next-auth";
import { LoginResponseSchema } from "./loginResponseSchema";

declare module "next-auth" {
  export interface User extends LoginResponseSchema {}
}

declare global {
  var apiStorage: Record<string, unknown> | undefined;
  var prisma: PrismaClient | undefined;
}
