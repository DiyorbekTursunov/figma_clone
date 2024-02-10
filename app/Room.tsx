"use client";

import { ReactNode } from "react";
import { RoomProvider } from "../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";

export function Room({ children }: { children: ReactNode }) {
  console.log();
  
  return (
    <RoomProvider id="my-room" initialPresence={{}}>
      <ClientSideSuspense  fallback={<div className="h-screen w-full text-[#fff] text-xl flex justify-center items-center">Loading…</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}