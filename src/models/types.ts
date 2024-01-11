import { ThunkOperation } from "./enums";

export type ThunkArg<ARG = undefined> = { operation: ThunkOperation; arg: ARG; progressPercent?: number };

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  designation: string;
  isDeactivated: boolean;
  totalFine?: number;
  paid?: number;
  due?: number;
}

export interface ILaw {
  id: number;
  name: string;
  description: string;
  amount: number;
}

export interface IFine {
  lawId: number;
  law?: ILaw;
  isDeleted: boolean;
  note: string;
  memberId: number;
  user?: IUser;
  amount: number;
}

export interface IFineDetails {
  id: number;
  userName: string;
  lawName: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  deletedAt: string;
  note: string;
}

export interface IPayment {
  paymentId?: number;
  user?: IUser;
  userId: number;
  amount: number;
  note: string;
}

export interface IPaymentDetails {
  paymentId?: number;
  userName: string;
  user?: IUser;
  paidat: string;
  userId: number;
  amount: number;
  note: string;
}

export interface ILoginData {
  username: string;
  password: string;
}

export interface IRegistrationData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IApiResponse<R, E = unknown> {
  status: number;
  response?: R;
  error?: E;
}

export interface IAuthUser {
  firstName: string;
  lastName: string;
  id: number;
  userName: string;
  email: string;
  emailConfirmed: boolean;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  accessFailedCount: number;
}

export type TypeApiResponse<TResponse, TError> = {
  status?: number;
  response?: TResponse;
  error?: TError;
};

export type TypeApiData<TData, TError> = {
  uid: string;
  isBusy: boolean;
  reqCount: number;
  version: number;
  cached?: boolean;
  propgressPercent: number;
} & TypeApiResponse<TData, TError>;
