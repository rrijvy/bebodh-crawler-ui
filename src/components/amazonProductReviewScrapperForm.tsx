"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useAppDispatch } from "@/store/store";
import { ThunkRunAmazonProductReviewScrapper } from "@/store/slices/apiSlices/RunAmazonProductReviewScrapper";

export const AmazonProductReviewScrapperForm = () => {
  const dispatch = useAppDispatch();

  const [url, setUrl] = useState("");

  const runCrawl = () => {
    dispatch(ThunkRunAmazonProductReviewScrapper(url));
  };

  return (
    <Card className="rounded">
      <CardHeader>
        <CardTitle>Amazon Review</CardTitle>
        <CardDescription>Place your product url here.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Textarea placeholder="product url" onChange={(e) => setUrl(e.target.value)} value={url} />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" onClick={runCrawl}>
          Initiate Crawl
        </Button>
      </CardFooter>
    </Card>
  );
};
