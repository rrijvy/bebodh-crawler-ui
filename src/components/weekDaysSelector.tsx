import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { EnumWeekDay } from "@/models/proxyScheduleSchema";

type Props = {
  dayOnClick: (value: EnumWeekDay) => void;
  activeWeekDays: EnumWeekDay[];
};

export const WeekDaysSelector = (props: Props) => {
  return (
    <div>
      {Object.values(EnumWeekDay).map((weekDay) => {
        const isActive = props.activeWeekDays.some((x) => x === weekDay);
        return (
          <TooltipProvider key={weekDay}>
            <Tooltip>
              <TooltipTrigger
                className="w-[42px] h-[42px] mr-2 border border-solid rounded border-gray-300 hover:border-gray-600 drop-shadow-md text-center data-[active=true]:border-blue-700 data-[active=true]:bg-blue-700 data-[active=true]:text-white"
                onClick={(e) => props.dayOnClick(weekDay)}
                data-active={isActive}
              >
                {weekDay.charAt(0)}
              </TooltipTrigger>
              <TooltipContent className="bg-white">
                <div>{weekDay}</div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};
