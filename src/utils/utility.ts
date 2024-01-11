import moment from "moment";
import { EnumRenderingDeviceType } from "../models/enums";
import { AppDateFormat } from "../helpers/constants";
import { TimeDataType } from "../models/timeZoneSchema";

class BrowserWindowUtil {
  /**
   * @function PixelFromPercent() Convert screen width from percentage to pixel value
   * @param percent Percentage for screen width
   * @returns {string} String representation of pixel value, ex. 200px
   */

  static GetQueryParamsAsObject<T extends Record<string, string | undefined>>(): T {
    const searchParams = new URLSearchParams(window.location.search);
    const obj: T = {} as T;
    const entries = searchParams.entries();
    let entry = entries.next();
    while (!entry.done) {
      obj[entry.value[0] as keyof T] = entry.value[1] as T[keyof T];
      entry = entries.next();
    }
    return obj;
  }

  public static PixelFromPercent(percent: number): string {
    return `${Math.ceil(window.innerWidth * (percent / 100)).toString()}px`;
  }

  public static GetHeightUptoBottom(id: string): string {
    const elem: HTMLElement | null = document.getElementById(id);
    const height = window.innerHeight - (elem?.getBoundingClientRect().top ?? 0);
    return height + "px";
  }

  public static GetWidthUptoRight(id: string): string {
    const elem: HTMLElement | null = document.getElementById(id);
    const width = window.innerWidth - (elem?.getBoundingClientRect().left ?? 0);
    return width + "px";
  }

  public static ScrollTopZero<T>(elem?: T): void {
    if (elem instanceof HTMLDivElement) {
      elem.scrollTop = 0;
    }
  }

  public static IsPlatformIOS(): boolean {
    return (
      ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) ||
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  }

  /**
   * @function IsCurrentRenderDevice() Check current window device type
   * @param {EnumRenderingDeviceType} device Type of device
   * @returns {boolean} If the given device is the current device
   */
  public static IsCurrentRenderDevice(device: EnumRenderingDeviceType): boolean {
    const deviceWidth: number = window.innerWidth;
    switch (device) {
      case EnumRenderingDeviceType.ExtraSmall:
        return deviceWidth < 576;
      case EnumRenderingDeviceType.Small:
        return deviceWidth >= 576 && deviceWidth < 768;
      case EnumRenderingDeviceType.Medium:
        return deviceWidth >= 768 && deviceWidth < 992;
      case EnumRenderingDeviceType.Large:
        return deviceWidth >= 992 && deviceWidth < 1200;
      case EnumRenderingDeviceType.ExtraLarge:
        return deviceWidth >= 1200;
      default:
        return false;
    }
  }

  public static FocusInput(elem: HTMLTextAreaElement | HTMLInputElement | null): void {
    if (elem) {
      elem.focus();
      elem.selectionStart = elem.value.length;
      elem.selectionEnd = elem.value.length;
    }
  }

  /**
   * @function GetCurrentRenderDevice() Get the current device type of the window
   * @returns {EnumRenderingDeviceType} Device type
   */
  public static GetCurrentRenderDevice(): EnumRenderingDeviceType {
    if (BrowserWindowUtil.IsCurrentRenderDevice(EnumRenderingDeviceType.ExtraLarge)) {
      return EnumRenderingDeviceType.ExtraLarge;
    } else if (BrowserWindowUtil.IsCurrentRenderDevice(EnumRenderingDeviceType.Large)) {
      return EnumRenderingDeviceType.Large;
    } else if (BrowserWindowUtil.IsCurrentRenderDevice(EnumRenderingDeviceType.Medium)) {
      return EnumRenderingDeviceType.Medium;
    } else if (BrowserWindowUtil.IsCurrentRenderDevice(EnumRenderingDeviceType.Small)) {
      return EnumRenderingDeviceType.Small;
    } else {
      return EnumRenderingDeviceType.ExtraSmall;
    }
  }

  public static IsScrollbarAtBottom(el: HTMLElement) {
    const sh = el.scrollHeight,
      st = el.scrollTop,
      ht = el.offsetHeight;
    if (ht === 0) return true;
    return st === sh - ht;
  }
}

export class TypesUtil {
  /**
   * @function IsBooleanTrue() Check is the parameter is a true value
   * @param param Parameter
   * @returns {boolean}
   */
  public static readonly comparableTypes = ["string", "number", "bigint"];

  public static IsBooleanTrue(param?: boolean | string): boolean {
    switch (typeof param) {
      case "string":
        return param.toLowerCase() === "true";
      case "boolean":
        return param === true;
      default:
        return false;
    }
  }
  static isValidEmail(email: string): boolean {
    return /^[a-zA-Z0-9.\\+!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,})+$/.test(email);
  }

  static validImageTypes(): string {
    return "image/png, image/jpg,  image/jpeg";
  }

  static validSheetType() {
    return ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
  }

  static isComparableType<T>(values: T[]) {
    return values.every((item) => {
      const typeOfItem = typeof item;
      if (this.comparableTypes.includes(typeOfItem)) return true;
      return false;
    });
  }
}

class DateTimeUtil {
  /**
   * @function TimeAgo() Calculate the time from the given time to now
   * @param datetime Time to start from
   * @returns {string}
   */
  public static TimeAgo(datetime?: string): string {
    if (datetime) {
      const tFrom = moment().unix(); //  new Date().getTime();
      const tTo = moment(datetime).unix(); // new Date(datetime).getTime();
      const tDiff = tFrom - tTo;
      const secondMil = 1,
        minuteMil = 60 * secondMil,
        hourMil = 60 * minuteMil,
        dayMil = 24.9999 * hourMil,
        dayRangeMil = 24 * hourMil,
        weekMil = 7.9999 * 24 * hourMil,
        weekRangeMil = 7 * 24 * hourMil,
        monthMil = 4.5 * 7 * 24 * hourMil,
        monthRangeMil = 30 * 24 * hourMil,
        yearRangeMil = 365 * 24 * hourMil,
        yearMil = 365 * 24 * hourMil;

      const constArr = [
        { limit: secondMil, dividor: secondMil, text: "second" },
        { limit: minuteMil, dividor: minuteMil, text: "minute" },
        { limit: hourMil, dividor: hourMil, text: "hour" },
        { limit: dayRangeMil, dividor: dayMil, text: "day" },
        { limit: weekMil, dividor: weekRangeMil, text: "week" },
        { limit: monthMil, dividor: monthRangeMil, text: "month" },
        { limit: yearMil, dividor: yearRangeMil, text: "year" },
      ];
      const ranges = constArr.filter((i) => tDiff > i.limit);
      if (ranges.length > 0) {
        const range = ranges[ranges.length - 1];
        if (range.limit === secondMil) {
          return "just now";
        }

        const displayDiff: number = range.text === "week" ? Math.round(tDiff / range.dividor) : Math.floor(tDiff / range.dividor);

        return `${displayDiff} ${range.text}${displayDiff > 1 ? "s" : ""} ago`;
      }
      return "just now";
    }
    return "";
  }

  public static getUTCDateTime(date: Date) {
    return `${moment(date).format("YYYY-MM-DD")}T23:59:59.000Z`;
  }

  public static GetCurrentTimeZone() {
    const today = new Date();
    const short = today.toLocaleDateString(undefined);
    const full = today.toLocaleDateString(undefined, { timeZoneName: "long" });
    const shortIndex = full.indexOf(short);
    if (shortIndex >= 0) {
      const trimmed = full.substring(0, shortIndex) + full.substring(shortIndex + short.length);
      return trimmed.replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, "");
    } else {
      return full;
    }
  }

  public static GetStandardDate(date?: string | Date, format?: string) {
    return date && moment(date).isValid() && !DateTimeUtil.IsMinimumDate(date)
      ? !format
        ? moment(date).format(AppDateFormat.default)
        : moment(date).format(format)
      : "";
  }

  public static IsMinimumDate(date?: string | Date) {
    const minDate = moment("0001/01/01");
    const currentDate = moment(date);
    return !moment.utc(currentDate).isAfter(minDate);
  }

  public static GetCurrentYear() {
    return new Date().getFullYear();
  }

  public static GetTimeFromHourMinute = (timePresetData: TimeDataType[], hour?: number, minute?: number) => {
    if (hour === undefined || minute === undefined) return undefined;
    const time = timePresetData.find((x) => x.Hour === String(hour) && x.Minute === String(minute));
    return time?.value;
  };

  public static GetTimeZoneOffset() {
    const timezoneOffset = new Date().getTimezoneOffset();
    const hoursOffset = timezoneOffset / 60;
    const sign = hoursOffset > 0 ? "-" : "";
    const hours = Math.abs(Math.floor(hoursOffset));
    const minutes = Math.abs(timezoneOffset % 60);
    const formattedTimezone = `${sign}${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    return formattedTimezone;
  }
}

class NumberUtil {
  /**
   * @function NumberFormatterComma() Add comma in the number when it is necessary
   * @param value Value to be formatted
   * @returns {string}
   */

  public static AddCommaAfterEachThreeNumFromLast(value: string): string {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  public static RemoveAlphaAndSigns(value: string): string {
    const numberWithAllDecimalPoints = value.replace(/[^0-9.]+/g, "");
    const numberWithFirstDecimalPoints = numberWithAllDecimalPoints.replace(/(\..*?)\..*/g, "$1");
    return numberWithFirstDecimalPoints;
  }

  public static FormatterComma(value: number | string, focused?: boolean, limit?: number): string {
    value = this.RemoveAlphaAndSigns(value.toString());

    const hasDecimalPoint = value.toString().indexOf(".") > -1;
    const isDecimalPointFirstChar = value.toString().indexOf(".") === 0;
    const isNumberAfterFirstZero = value.toString().length === 2 && value.toString().indexOf("0") === 0 && value.toString() !== "0.";
    const hasMoreThanLimitNumAfterDecimalPoint =
      limit && ((hasDecimalPoint && value.split(".")[0].length > limit) || (!hasDecimalPoint && value.length > limit));
    const isZero = value.toString() === "0.00";
    const hasMoreThanTwoNumAfterDecimalPoint = value.indexOf(".") > -1 && value.split(".")[1].length > 2;

    if (!focused) {
      value = Number(value).toFixed(2);
    } else if (hasMoreThanLimitNumAfterDecimalPoint) {
      value = value.slice(0, -1);
    } else if (isDecimalPointFirstChar) {
      value = "0.";
    } else if (isNumberAfterFirstZero) {
      value = value.toString().slice(-1);
    } else if (isZero) {
      value = "0.0";
    } else if (hasMoreThanTwoNumAfterDecimalPoint) {
      value = value.slice(0, -1);
    }

    let formattedValue: string;
    if (hasDecimalPoint) {
      formattedValue =
        this.AddCommaAfterEachThreeNumFromLast(value.toString().split(".")[0]) + "." + value.toString().split(".")[1].substring(0, 2);
    } else {
      formattedValue = this.AddCommaAfterEachThreeNumFromLast(value.toString());
    }
    return formattedValue;
  }

  public static FormatterDollarComma(value: number | string, focused?: boolean, limit?: number): string {
    value = this.RemoveAlphaAndSigns(value.toString());

    const hasDecimalPoint = value.toString().indexOf(".") > -1;
    const isDecimalPointFirstChar = value.toString().indexOf(".") === 0;
    const isNumberAfterFirstZero = value.toString().length === 2 && value.toString().indexOf("0") === 0 && value.toString() !== "0.";
    const hasMoreThanLimitNumAfterDecimalPoint =
      limit && ((hasDecimalPoint && value.split(".")[0].length > limit) || (!hasDecimalPoint && value.length > limit));
    const isZero = value.toString() === "0.00";
    const hasMoreThanTwoNumAfterDecimalPoint = value.indexOf(".") > -1 && value.split(".")[1].length > 2;

    if (!focused) {
      value = Number(value).toFixed(2);
    } else if (hasMoreThanLimitNumAfterDecimalPoint) {
      value = value.slice(0, -1);
    } else if (isDecimalPointFirstChar) {
      value = "0.";
    } else if (isNumberAfterFirstZero) {
      value = value.toString().slice(-1);
    } else if (isZero) {
      value = "0.0";
    } else if (hasMoreThanTwoNumAfterDecimalPoint) {
      value = value.slice(0, -1);
    }

    let formattedValue: string;
    if (hasDecimalPoint) {
      formattedValue =
        "$" + this.AddCommaAfterEachThreeNumFromLast(value.toString().split(".")[0]) + "." + value.toString().split(".")[1].substring(0, 2);
    } else {
      formattedValue = "$" + this.AddCommaAfterEachThreeNumFromLast(value.toString());
    }
    return formattedValue;
  }

  public static UnformatterComma(value: string): string | number {
    const hasDollarSign = value.indexOf("$") > -1;
    const formattedValue = hasDollarSign ? value.split(",").join("") : Number(value.split(",").join(""));
    return formattedValue;
  }

  public static UnformatterDollarComma(value: string, limit?: number): number {
    value = this.RemoveAlphaAndSigns(value);
    const hasDecimalPoint = value.toString().indexOf(".") > -1;
    const isUndefinedOrFirstDecimalPoint = value === "" || value.indexOf(".") === 0;
    const hasMoreThanLimitNumAfterDecimalPoint =
      limit && ((hasDecimalPoint && value.split(".")[0].length > limit) || (!hasDecimalPoint && value.length > limit));
    const hasMoreThanTwoNumAfterDecimalPoint = value.split(".")[1] && value.split(".")[1].length > 2;

    let formattedValue: number = 0;

    if (isUndefinedOrFirstDecimalPoint) {
      value = "0";
    } else if (hasMoreThanLimitNumAfterDecimalPoint) {
      value = value.slice(0, -1);
    } else if (hasMoreThanTwoNumAfterDecimalPoint) {
      value = value.slice(0, -1);
    }

    formattedValue = Number(value);
    formattedValue = Number(formattedValue.toFixed(2));
    return formattedValue;
  }
}

export class StringUtil {
  /**
   * @function Capitalize() Capitalize the first letter of the input string
   * @param str Input string
   * @returns {string} Capitalized string
   */
  public static Capitalize(str: string): string {
    if (!str) {
      return "";
    }
    if (str.length === 0) {
      return str.toUpperCase();
    }
    return str[0].toUpperCase() + str.slice(1);
  }
  static NormalizeName(str?: string): string {
    return (str ?? "")
      .split(" ")
      .map((c) => StringUtil.Capitalize(c.toLowerCase()))
      .join(" ");
  }
  static FilterStringNotEmpty(arr: unknown[]): string[] {
    return Array.isArray(arr) ? arr.filter((a): a is string => typeof a === "string" && !!a) : [];
  }
  static HasRepeat(password: string, maxRepeatition: number) {
    const str = password.toLowerCase();
    const subStrList: string[] = [];
    const maxSubStrLength = Math.floor(str.length / maxRepeatition);
    for (let i = 1; i <= maxSubStrLength; i++) {
      for (let j = 0; j < str.length - i; j++) {
        const subStr = str.substr(j, i).repeat(maxRepeatition + 1);
        if (subStrList.includes(subStr)) continue;
        subStrList.push(subStr);
        if (str.includes(subStr)) return true;
      }
    }
    return false;
  }

  /**
   * @function CreateTitleFromCamelCase() Break down camel case string into formated title
   * @param str Input string
   * @returns {string} Converted title string
   */
  public static CreateTitleFromCamelCase(str = ""): string {
    let data = "";
    for (const c of str) {
      const code = c.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        data += ` ${c}`;
      } else {
        data += c;
      }
    }
    return this.Capitalize(data.trim());
  }

  public static FormatPhoneNumber(phoneNumber?: string): string | undefined {
    if (typeof phoneNumber === "string" && phoneNumber.length === 12) {
      const p1 = phoneNumber.slice(0, 2);
      const p2 = phoneNumber.slice(2, 5);
      const p3 = phoneNumber.slice(5, 8);
      const p4 = phoneNumber.slice(8);
      return `${p1} (${p2}) ${p3}-${p4}`;
    }
    return phoneNumber;
  }

  public static getPhoneNumberFromInput(text: string) {
    const phone = text.replace(/[_\s()-]/g, "");
    return phone;
  }

  /**
   * @function FormatDateForInput() Get formatted string from date
   * @param date Date object
   * @returns {string} Date formated to MM-DD-YYYY
   * @description The output format is supported by the <input type="date" /> tag
   */
  public static FormatDateForInput(date: Date): string {
    const year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    if (month.length === 1) {
      month = month.padStart(2, "0");
    }
    let day = date.getDate().toString();
    if (day.length === 1) {
      day = day.padStart(2, "0");
    }
    return `${month}-${day}-${year}`;
  }

  static ToQueryString<T extends string | string[][] | Record<string, string> | URLSearchParams | undefined>(obj: T) {
    return new URLSearchParams(obj).toString();
  }

  public static NumberOfUppercaseCharecter(text: string): number {
    let capitalLettes: number = 0;
    for (let i = 0; i < text.length; i++) {
      const ascii = text.charCodeAt(i);
      if (ascii >= 65 && ascii <= 90) {
        ++capitalLettes;
      }
    }
    return capitalLettes;
  }

  public static NumberOfLowercaseCharecter(text: string): number {
    let capitalLettes: number = 0;
    for (let i = 0; i < text.length; i++) {
      const ascii = text.charCodeAt(i);
      if (ascii >= 97 && ascii <= 122) {
        ++capitalLettes;
      }
    }
    return capitalLettes;
  }

  public static HasSpecialCharecter(text: string): boolean {
    const regex = new RegExp(/[`!@#$%^&*?~]/);
    return regex.test(text);
  }

  public static HasNumber(text: string): number {
    let numbers: number = 0;

    for (let i = 0; i < text.length; i++) {
      const ascii = text.charCodeAt(i);
      if (ascii >= 48 && ascii <= 57) {
        ++numbers;
      }
    }
    return numbers;
  }

  static HasSequentialChars(password: string, maxLength: number): boolean {
    const str = password.toLowerCase();
    let repeatedCount = 1;
    for (let i = 0; i < str.length - 1; i++) {
      if (str.charCodeAt(i) + 1 === str.charCodeAt(i + 1)) repeatedCount++;
      else repeatedCount = 1;
      if (repeatedCount > maxLength) return true;
    }
    return false;
  }

  public static ValidateEmail(email: string) {
    const regex = new RegExp(
      '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$'
    );
    return regex.test(email);
    // return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(email);
  }

  public static decodeHtml(html: string) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = html;
    return textarea.value;
  }

  public static ExtractTextFromHtml(html: string) {
    const span = document.createElement("span");
    span.innerHTML = html;
    return span.textContent || span.innerText;
  }

  public static TruncateStringByLength = (text: string, length: number) => {
    if (!text) return "";

    return text.length > length ? `${text.substring(0, length)}...` : text;
  };
}

class UUID {
  /**
   * @function Generate() Generated UUID from Math.random()
   * @param blocks Number of string blocks to generate, default is `4`
   * @returns {string} Generated UUID
   */
  public static Generate(blocks = 4): string {
    const arr: number[] = Array(blocks).fill(0);
    return arr
      .map(() => Math.floor(Math.random() * 1000000))
      .map((v) => v.toString(16).toUpperCase())
      .join("-");
  }
}

class ObjectUtil {
  /**
   * @function StringIncludes<T>() Match string inside object within string properties
   * @param obj Object
   * @param str String to match
   * @returns {boolean}
   */
  public static StringIncludes<T extends object>(obj: T, str = ""): boolean {
    const preparatorFunc = String.prototype.toUpperCase;
    const _str: string = preparatorFunc.call(str);
    return Object.keys(obj).some((key) => {
      const _obj = obj as { [key: string]: unknown };
      const _objData: string = _obj[key] as string;
      return typeof _objData === "string" && preparatorFunc.call(_objData).includes(_str);
    });
  }

  /**
   * @function GroupByKey<T>() Group array based on a object key
   * @param {T[]} arr Input array of object
   * @param {string} objKey Key from the object for grouping
   * @returns {T[][]} Grouped array
   */
  public static GroupByKey<T extends object>(arr: T[] = [], objKey: keyof T): T[][] {
    const tmp: { [key: string]: unknown[] } = {};
    arr.forEach((i) => {
      if (!!i && !!i[objKey]) {
        const storageKey = JSON.stringify(i[objKey]);
        if (tmp[storageKey] === undefined) {
          tmp[storageKey] = [];
        }
        tmp[storageKey].push(i);
      }
    });
    return Object.keys(tmp).map((k) => tmp[k]) as T[][];
  }

  public static CopyObject<T extends object, R extends object>(refObj: T, fromObj: R) {
    for (const refKey in refObj) {
      const refPropertyValue = refObj[refKey];
      for (const fromKey in fromObj) {
        if (refKey.toString() === fromKey.toString()) {
          refObj[refKey] = fromObj[fromKey] as unknown as typeof refPropertyValue;
          break;
        }
      }
    }
  }
}

export class EnumUtil {
  static EnumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
    return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
  }
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const Utility = {
  BrowserWindowUtil,
  TypesUtil,
  NumberUtil,
  StringUtil,
  UUID,
  ObjectUtil,
  DateTimeUtil,
  EnumUtil,
};
