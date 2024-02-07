import { combineReducers } from "@reduxjs/toolkit";
import { CreateThunkReducer } from "../../libs/createThunkReducer";
import { ThunkRunAmazonProductCategoryScrapper } from "./apiSlices/RunAmazonProductCategoryScrapper";
import { ThunkRunAmazonProductReviewScrapper } from "./apiSlices/RunAmazonProductReviewScrapper";
import { ThunkAddOrUpdateProxyRetriverSchedule } from "./apiSlices/AddOrUpdateProxyRetriverSchedule";

export const ReducerApi = combineReducers({
  RunAmazonProductCategoryScrapper: CreateThunkReducer(ThunkRunAmazonProductCategoryScrapper),
  RunAmazonProductReviewScrapper: CreateThunkReducer(ThunkRunAmazonProductReviewScrapper),
  AddOrUpdateProxyRetriverSchedule: CreateThunkReducer(ThunkAddOrUpdateProxyRetriverSchedule),
});

export type ReducerApiState = ReturnType<typeof ReducerApi>;
