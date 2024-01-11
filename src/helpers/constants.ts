import { LineItemActivityTimeFilterType } from "../models/enums";

export const HttpHeaders = {
  ContentType: {
    ApplicationJson: {
      "Content-Type": "application/json",
    },
    FormData: {
      "Content-Type": "multipart/form-data",
    },
  },
};

const HtmlIds = {
  Demo: "demo",
};

const HtmlClasses = {
  Demo: "demo",
};

const TimeoutDelay = {
  Default: 500,
  HeightUpToBottom: 300,
  WidthUptoRight: 300,
  DeviceBasedRender: 200,
  ActivityTracker: 1000,
  PasswordChangeStatus: 4000,
  Toast: {
    NextMessage: 500,
    CurrentMessage: 3000,
  },
  AppHeight: (): number => TimeoutDelay.HeightUpToBottom + TimeoutDelay.DeviceBasedRender,
};

export const AppDateFormat = {
  default: "MM-DD-YYYY",
  defaultWithSlash: "MM/DD/YYYY",
  startWithYear: "YYYY-MM-DD",
  Discussions: {
    CurrentYear: "MMM D",
    PreviousYear: "MMM D, YYYY",
  },
};

const Config = {
  LineItemActivity: {
    PastTime: LineItemActivityTimeFilterType.D30,
  },
  LeadTimeWindowMaximunDays: 9999,
};

export const P1stonConstants = {
  HttpHeaders,
  HtmlIds,
  HtmlClasses,
  TimeoutDelay,
  Config,
  AppDateFormat,
};
