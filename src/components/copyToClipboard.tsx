import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import SvgCopy from "./../assets/svg/copy.svg";

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
          <SvgCopy />
        </TooltipTrigger>
        <TooltipContent className="bg-white border border-solid rounded">{props.tooltipText || "copy"}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
