"use client";

import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

enum RecurrenceType {
  Daily = "Daily",
  Weekly = "Weekly",
  Monthly = "Monthly",
}

enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

enum MonthlyRecurrenceWeek {
  NotDefined,
  First,
  Second,
  Third,
  Fourth,
  Last,
}

enum MonthlySelectionType {
  NotDefined,
  OnSpecificDay,
  OnREcurrenceWeekDay,
}

interface ProxySchedule {
  recurrenceType?: RecurrenceType;
  repeatEvery?: number;
  weekSpecificDays?: WeekDay[];
  hour?: number;
  minute?: number;
  timeZone?: string;
  monthlyRecurrenceWeek?: MonthlyRecurrenceWeek;
  monthlySelectionType?: MonthlySelectionType;
  monthlySpecificDay?: number;
}

export const ProxyScheduleEditor = () => {
  const [state, setState] = useState<ProxySchedule>();
  const onChangeRecurrenceType = (value: string) => {
    const recurrenceType = RecurrenceType[value as keyof typeof RecurrenceType];
    setState({ ...state, recurrenceType: recurrenceType });
  };
  return (
    <div>
      <Select onValueChange={onChangeRecurrenceType}>
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent className="hover:z-50">
          {Object.keys(RecurrenceType).map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {state?.recurrenceType === RecurrenceType.Daily && (
        <div>
          <p>Daily selected</p>
        </div>
      )}
    </div>
  );
};
