"use client";

import React from "react";
import { RecurringScheduleSchema } from "@/models/recurringScheduleSchema";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { CopyToClipboard } from "./copyToClipboard";
import { Utility } from "@/utils/utility";
import SvgTrash from "./../assets/svg/trash.svg";

type Props = {
  schedules: RecurringScheduleSchema[];
};

export const ProxySchedulerTable = (props: Props) => {
  const removeSchedule = () => {};
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-slate-500 w-full overflow-x-auto">
        <thead>
          <tr>
            <th className="border border-slate-600 px-3 py-2">Job Title</th>
            <th className="border border-slate-600 px-3 py-2">Next Execution</th>
            <th className="border border-slate-600 px-3 py-2">Last Execution</th>
            <th className="border border-slate-600 px-3 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {props.schedules.map((schedule) => {
            return (
              <tr key={schedule.jobId}>
                <td className="border border-slate-700 px-3 py-2">
                  <span className="inline-block cursor-pointer p-1" onClick={removeSchedule}>
                    <SvgTrash />
                  </span>
                  <TooltipProvider key={`tooltip-job-title-${schedule.jobId}`}>
                    <Tooltip>
                      <TooltipTrigger>
                        {schedule.jobTitle
                          ? schedule.jobTitle.length > 20
                            ? `${schedule.jobTitle?.substring(0, 22)}...`
                            : schedule.jobTitle
                          : schedule.jobId}
                      </TooltipTrigger>
                      <TooltipContent className="bg-white border border-solid rounded">{schedule.jobTitle}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span className="pl-3">
                    <CopyToClipboard uniqueKey={schedule.jobId ?? ""} text={schedule.jobId ?? ""} tooltipText="copy job id" />
                  </span>
                </td>
                <td className="border border-slate-700 px-3 py-2">
                  {Utility.DateTimeUtil.GetStandardDate(schedule.nextExecution, "MMMM Do YYYY, h:mm a")}
                </td>
                <td className="border border-slate-700 px-3 py-2">
                  {Utility.DateTimeUtil.GetStandardDate(schedule.lastExecution, "MMMM Do YYYY, h:mm a")}
                </td>
                <td className="border border-slate-700 px-3 py-2">
                  {Utility.DateTimeUtil.GetStandardDate(schedule.createdAt, "MMMM Do YYYY, h:mm a")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
