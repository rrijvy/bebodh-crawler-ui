import React, { PropsWithChildren } from "react";

export const Container = (props: PropsWithChildren<{ className?: string }>) => {
  return <div className={`container mx-auto p-8 xl:px-0 ${props.className ? props.className : ""}`}>{props.children}</div>;
};
