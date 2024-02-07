export enum RecurrenceType {
  Daily = "Daily",
  Weekly = "Weekly",
  Monthly = "Monthly",
}

export enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
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
  weekSpecificDays?: WeekDay[];
  hour?: number;
  minute?: number;
  timeZone?: string;
  monthlyRecurrenceWeek?: MonthlyRecurrenceWeek;
  monthlySelectionType?: MonthlySelectionType;
  monthlySpecificDay?: number;
}
