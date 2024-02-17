"use client";

import React, { useState } from "react";
import { RecurringScheduleSchema } from "@/models/recurringScheduleSchema";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { CopyToClipboard } from "./copyToClipboard";
import { Utility } from "@/utils/utility";
import { useAppDispatch } from "@/store/store";
import { ThunkDeleteProxySchedule } from "@/store/slices/apiSlices/DeleteProxySchedule";
import { FaTrash } from "react-icons/fa6";
import { unwrapResult } from "@reduxjs/toolkit";

type Props = {
  schedules: RecurringScheduleSchema[];
};

export const ProxySchedulerTable = (props: Props) => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState(props.schedules);
  const removeSchedule = (jobId?: string) => {
    if (jobId)
      dispatch(ThunkDeleteProxySchedule(jobId))
        .then(unwrapResult)
        .then((res) => {
          if (res.status === 200) {
            setState(state.filter((x) => x.jobId !== jobId));
          }
        });
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse overflow-x-auto border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600 px-3 py-2"></th>
            <th className="border border-slate-600 px-3 py-2">Job Title</th>
            <th className="border border-slate-600 px-3 py-2">Next Execution</th>
            <th className="border border-slate-600 px-3 py-2">Last Execution</th>
            <th className="border border-slate-600 px-3 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {state.map((schedule) => {
            return (
              <tr key={schedule.jobId}>
                <td className="border border-slate-700 px-3 py-2 align-middle">
                  <FaTrash className="cursor-pointer" onClick={() => removeSchedule(schedule.jobId)} />
                </td>
                <td className="border border-slate-700 px-3 py-2">
                  <TooltipProvider key={`tooltip-job-title-${schedule.jobId}`}>
                    <Tooltip>
                      <TooltipTrigger>
                        {schedule.jobTitle
                          ? schedule.jobTitle.length > 20
                            ? `${schedule.jobTitle?.substring(0, 22)}...`
                            : schedule.jobTitle
                          : schedule.jobId}
                      </TooltipTrigger>
                      <TooltipContent className="rounded border border-solid bg-white">{schedule.jobTitle}</TooltipContent>
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
