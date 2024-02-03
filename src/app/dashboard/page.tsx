"use client";
import * as React from "react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
  console.log("use session", session);

  return <div></div>;
}
