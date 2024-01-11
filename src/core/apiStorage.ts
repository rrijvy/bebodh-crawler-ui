import { TypeApiData } from "../models/types";

export class ApiStorage {
  private static instance: ApiStorage | undefined = undefined;

  private _objects: {
    [key: string]: { res: object; actionType: string } | undefined;
  } = {};

  private _storeReferenceToWindow(): void {
    window.apiStorage = this._objects;
  }

  constructor() {
    this._storeReferenceToWindow();
  }

  static GetDefault(): ApiStorage {
    if (ApiStorage.instance === undefined) {
      ApiStorage.instance = new ApiStorage();
    }
    return ApiStorage.instance;
  }

  setResponse(key: string, actionType: string, res: object): void {
    if (!key) return;
    if (!res) {
      this._objects[key] = undefined;
    } else {
      this._objects[key] = {
        actionType,
        res,
      };
    }
  }

  getResponse<R, E>(api: TypeApiData<R, E> | undefined): R | undefined {
    if (!api) return undefined;
    return this._objects[api.uid]?.res as unknown as R;
  }

  clearResponse<R, E>(api: TypeApiData<R, E>): void {
    this._objects[api.uid] = undefined;
  }

  clearAllResponse(): void {
    this._objects = {};
    this._storeReferenceToWindow();
  }
}
