export { default } from "next-auth/middleware";
import { UIRoutes } from "@/core/routes";

export const config = { matcher: ["/", UIRoutes.Dashboard] };
