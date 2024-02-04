import { combineReducers } from "@reduxjs/toolkit";
import { CreateThunkReducer } from "../../libs/createThunkReducer";
import { ThunkRunAmazonProductCategoryScrapper } from "./apiSlices/RunAmazonProductCategoryScrapper";
import { ThunkRunAmazonProductReviewScrapper } from "./apiSlices/RunAmazonProductReviewScrapper";

export const ReducerApi = combineReducers({
  RunAmazonProductCategoryScrapper: CreateThunkReducer(ThunkRunAmazonProductCategoryScrapper),
  RunAmazonProductReviewScrapper: CreateThunkReducer(ThunkRunAmazonProductReviewScrapper),
});

export type ReducerApiState = ReturnType<typeof ReducerApi>;
