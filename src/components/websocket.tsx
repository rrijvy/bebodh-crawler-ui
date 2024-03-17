"use client";

import { useEffect } from "react";
import { Socket } from "@/utils/socket";

export const Websocket = async () => {
  useEffect(() => {
    console.log(new Date());

    const socketUrl = `${process.env.NEXT_PUBLIC_SOCKET_URL}?userid=${"12"}`;
    if (!socketUrl) return;
    const socket = new Socket(socketUrl);
    socket.connect();

    return (): void => socket.disconnect();
  }, []);

  return null;
};
