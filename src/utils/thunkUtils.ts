import { ThunkOperation } from "../models/enums";
import { ThunkArg } from "../models/types";

const ThunkOperationList: string[] = [ThunkOperation.Local, ThunkOperation.Network];

export class ThunkUtils {
  private static instance: ThunkUtils | undefined = undefined;

  static GetDefault(): ThunkUtils {
    if (ThunkUtils.instance === undefined) {
      ThunkUtils.instance = new ThunkUtils();
    }
    return ThunkUtils.instance;
  }
  readonly P1stonThunkOperation = ThunkOperation;

  private constructor() {}

  isOperation<T>(param: unknown): param is ThunkArg<T> {
    if (
      typeof param === "object" &&
      param !== null &&
      !Array.isArray(param) &&
      "operation" in param &&
      typeof param["operation"] === "string"
    ) {
      return ThunkOperationList.includes(param["operation"]);
    }
    return false;
  }

  isLocalOperation<T>(param: unknown): param is ThunkArg<T> {
    if (this.isOperation(param)) {
      return param["operation"] === ThunkOperation.Local;
    }
    return false;
  }

  isOperationArray<T>(param: unknown): param is Array<ThunkArg<T>> {
    return !!param && Array.isArray(param) && param.every(this.isOperation);
  }

  getActionTypeWithoutCase(type: string): string {
    const _types = type.split("/");
    return _types.slice(0, _types.length - 1).join("/");
  }
}
