import { combineReducers } from "@reduxjs/toolkit";
import { CreateThunkReducer } from "../../libs/createThunkReducer";
import { ThunkRunAmazonProductCategoryScrapper } from "./apiSlices/RunAmazonProductCategoryScrapper";
import { ThunkRunAmazonProductReviewScrapper } from "./apiSlices/RunAmazonProductReviewScrapper";
import { ThunkAddOrUpdateProxyRetriverSchedule } from "./apiSlices/AddOrUpdateProxyRetriverSchedule";
import { ThunkRunGoogleMapScrapper } from "./apiSlices/RunGoogleMapScrapper";

export const ReducerApi = combineReducers({
  RunGoogleMapScrapper: CreateThunkReducer(ThunkRunGoogleMapScrapper),
  RunAmazonProductCategoryScrapper: CreateThunkReducer(ThunkRunAmazonProductCategoryScrapper),
  RunAmazonProductReviewScrapper: CreateThunkReducer(ThunkRunAmazonProductReviewScrapper),
  AddOrUpdateProxyRetriverSchedule: CreateThunkReducer(ThunkAddOrUpdateProxyRetriverSchedule),
});

export type ReducerApiState = ReturnType<typeof ReducerApi>;
