"use client";

import makeStore, { AppStore } from "@/store/store";
import { PropsWithChildren, useRef } from "react";
import { Provider } from "react-redux";

export function ReduxStoreProvider({ children }: PropsWithChildren) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
