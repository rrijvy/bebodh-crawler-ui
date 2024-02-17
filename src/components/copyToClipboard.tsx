import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { FaCopy } from "react-icons/fa6";

type Props = {
  uniqueKey: string;
  text: string;
  tooltipText?: string;
};

export const CopyToClipboard = (props: Props) => {
  return (
    <TooltipProvider key={`tooltip-${props.uniqueKey}`}>
      <Tooltip>
        <TooltipTrigger className="" onClick={(e) => navigator.clipboard.writeText(props.text)}>
          <FaCopy />
        </TooltipTrigger>
        <TooltipContent className="rounded border border-solid bg-white">{props.tooltipText || "copy"}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
