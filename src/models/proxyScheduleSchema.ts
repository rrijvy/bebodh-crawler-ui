export enum RecurrenceType {
  Daily = "Daily",
  Weekly = "Weekly",
  Monthly = "Monthly",
}

export enum EnumWeekDay {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

export enum MonthlyRecurrenceWeek {
  NotDefined,
  First,
  Second,
  Third,
  Fourth,
  Last,
}

export enum MonthlySelectionType {
  NotDefined,
  OnSpecificDay,
  OnREcurrenceWeekDay,
}

export interface ProxyScheduleSchema {
  recurrenceType?: RecurrenceType;
  repeatEvery?: number;
  weekSpecificDays?: EnumWeekDay[];
  hour?: number;
  minute?: number;
  timeZone?: string;
  monthlyRecurrenceWeek?: MonthlyRecurrenceWeek;
  monthlySelectionType?: MonthlySelectionType;
  monthlySpecificDay?: number;
}
