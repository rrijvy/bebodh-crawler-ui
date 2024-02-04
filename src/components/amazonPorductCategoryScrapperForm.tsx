"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { ThunkRunAmazonProductCategoryScrapper } from "@/store/slices/apiSlices/RunAmazonProductCategoryScrapper";
import { useAppDispatch } from "@/store/store";

export const AmazonPorductCategoryScrapperForm = () => {
  const dispatch = useAppDispatch();

  const [url, setUrl] = useState("");

  const runCrawl = () => {
    dispatch(ThunkRunAmazonProductCategoryScrapper(url));
  };

  return (
    <Card className="rounded">
      <CardHeader>
        <CardTitle>Amazon Porduct</CardTitle>
        <CardDescription>Place your product category url here.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Textarea placeholder="product category url" onChange={(e) => setUrl(e.target.value)} value={url} />
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
