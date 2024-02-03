"use server";

import { RegisterRequestSchema } from "@/models/registerRequestSchema";
import { RegisterReponseSchema } from "@/models/registerResponseSchema";
import { apiRoutes } from "@/routes";

export const Register = async (requestSchema: RegisterRequestSchema) => {
  const response = await fetch(apiRoutes.register, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    body: JSON.stringify(requestSchema),
  });
  if (response) {
    const result = (await response.json()) as RegisterReponseSchema;
    if (result) {
      return result;
    } else return null;
  } else return null;
};
