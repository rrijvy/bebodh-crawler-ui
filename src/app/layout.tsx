import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideNav } from "@/components/sideNav";
import { auth } from "@/auth";
import { Websocket } from "@/components/websocket";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bebodh Crawler",
  description: "Generated by Bebodhs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const isAuthenticated = session?.token;
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {isAuthenticated && <Websocket />}
        {isAuthenticated && <SideNav />} */}
        {children}
      </body>
    </html>
  );
}
