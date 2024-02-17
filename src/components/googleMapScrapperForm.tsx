"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useAppDispatch } from "@/store/store";
import { ThunkRunGoogleMapScrapper } from "@/store/slices/apiSlices/RunGoogleMapScrapper";

export const GoogleMapScrapperForm = () => {
  const dispatch = useAppDispatch();

  const [searchText, setSearchText] = useState("");

  const runCrawl = () => {
    dispatch(ThunkRunGoogleMapScrapper(searchText));
  };

  return (
    <Card className="rounded">
      <CardHeader>
        <CardTitle>Google Map Crawler</CardTitle>
        <CardDescription>Place your search text here.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Textarea placeholder="Search..." onChange={(e) => setSearchText(e.target.value)} value={searchText} />
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
