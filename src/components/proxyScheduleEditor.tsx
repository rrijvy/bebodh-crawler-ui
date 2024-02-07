"use client";

import React, { useMemo, useState } from "react";
import { TimeZoneDataType, TimeZonePresetData, TimeDataType, TimePresetData } from "../assets";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ProxyScheduleSchema, RecurrenceType } from "@/models/proxyScheduleSchema";
import { useAppDispatch } from "@/store/store";
import { ThunkAddOrUpdateProxyRetriverSchedule } from "@/store/slices/apiSlices/AddOrUpdateProxyRetriverSchedule";

export const ProxyScheduleEditor = () => {
  const dispatch = useAppDispatch();

  const [timeZonePresetData] = useState<TimeZoneDataType[]>(TimeZonePresetData);
  const [timePresetData] = useState<TimeDataType[]>(TimePresetData);

  const timeDropdownItems = useMemo(() => {
    return timePresetData.map((x) => ({
      label: x.value,
      value: x.value,
    }));
  }, [timePresetData]);

  const timeZoneDropdownItems = useMemo(() => {
    return timeZonePresetData.map((x) => ({
      label: `(UTC${x.BaseUtcOffset.startsWith("-") ? x.BaseUtcOffset.substring(0, 6) : "+" + x.BaseUtcOffset.substring(0, 5)}) ${
        x.StandardName
      }`,
      value: x.StandardName,
    }));
  }, [timeZonePresetData]);

  const [state, setState] = useState<ProxyScheduleSchema>({ recurrenceType: RecurrenceType.Daily, repeatEvery: 1 });
  const [time, setTime] = useState<TimeDataType>();
  const [timeZone, setTimeZone] = useState<TimeZoneDataType>();

  const onChangeRecurrenceType = (value: string) => {
    const recurrenceType = RecurrenceType[value as keyof typeof RecurrenceType];
    setState({ ...state, recurrenceType: recurrenceType });
  };

  const onChangeRepeatEvery = (value: string) => {
    setState({ ...state, repeatEvery: parseInt(value) });
  };

  const onSelectTime = (value: string) => {
    const item = TimePresetData.find((x) => x.value === value);
    if (item) {
      setTime(item);
      setState({
        ...state,
        hour: parseInt(item.Hour),
        minute: parseInt(item.Minute),
      });
    }
  };

  const onSelectTimeZone = (value: string) => {
    const item = TimeZonePresetData.find((x) => x.StandardName.toLowerCase() === value);
    if (item) {
      setTimeZone(item);
      setState({
        ...state,
        timeZone: item.StandardName,
      });
    }
  };

  const onSaveClickHandler = () => {
    dispatch(ThunkAddOrUpdateProxyRetriverSchedule(state));
  };

  return (
    <div>
      <div>
        <p className="pt-2 pb-2">Repeat every</p>
        <div>
          <div className="w-3/12 inline-block pr-2">
            <Input
              className="rounded"
              type="number"
              placeholder="1-31"
              value={state.repeatEvery}
              min={1}
              max={31}
              onChange={(e) => onChangeRepeatEvery(e.target.value)}
            />
          </div>
          <div className="w-9/12 inline-block pl-2">
            <Select onValueChange={onChangeRecurrenceType} defaultValue={state?.recurrenceType}>
              <SelectTrigger className="w-full rounded">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-white drop-shadow-md rounded">
                {Object.keys(RecurrenceType).map((type) => (
                  <SelectItem className="cursor-pointer focus:bg-blue-200" key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div>
        <p className="pt-2 pb-2">At</p>
        <div className="pb-2">
          <Select onValueChange={onSelectTime} defaultValue={time?.value}>
            <SelectTrigger className="w-full rounded">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white drop-shadow-md rounded">
              {timeDropdownItems.map((item) => (
                <SelectItem className="cursor-pointer focus:bg-blue-200" key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="pb-2">
          <Select onValueChange={onSelectTimeZone} defaultValue={timeZone?.StandardName}>
            <SelectTrigger className="w-full rounded">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white drop-shadow-md rounded">
              {timeZoneDropdownItems.map((item) => (
                <SelectItem className="cursor-pointer focus:bg-blue-200" key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="pt-2">
        <Button variant={"outline"} onClick={onSaveClickHandler}>
          Save
        </Button>
      </div>
    </div>
  );
};
