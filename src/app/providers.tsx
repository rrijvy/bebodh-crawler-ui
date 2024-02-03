"use client";

import { PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";

export const AuthProvider = (props: PropsWithChildren<{}>) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};
