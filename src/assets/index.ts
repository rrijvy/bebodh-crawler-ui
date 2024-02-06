import TZData from "./timezones.json";
import TData from "./times.json";

export type TimeDataType = {
  Hour: string;
  Minute: string;
  value: string;
};

export type TimeZoneDataType = {
  Id: string;
  DisplayName: string;
  StandardName: string;
  DaylightName: string;
  BaseUtcOffset: string;
};

export const TimeZonePresetData: TimeZoneDataType[] = TZData as any;
export const TimePresetData: TimeDataType[] = TData as any;
