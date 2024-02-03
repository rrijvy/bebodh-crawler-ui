import { ApplicationUserSchema } from "./applicationUserSchema";

export interface LoginResponseSchema {
  user?: ApplicationUserSchema;
  message?: string;
  expiresAt?: string;
  isSuccess?: string;
}
