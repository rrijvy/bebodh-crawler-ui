import { GoogleMapScrapperForm } from "@/components/googleMapScrapperForm";
import { ReduxStoreProvider } from "@/components/reduxStoreProvider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import React from "react";

const GoogleMapScrapper = () => {
  return (
    <ReduxStoreProvider>
      <div className="mx-auto w-4/12 pt-5">
        <Tabs defaultValue="googleMapScrapper" className="w-full">
          <TabsList className="grid w-full grid-cols-1 rounded bg-teal-950">
            <TabsTrigger
              className={cn("rounded text-white data-[state=active]:bg-white data-[state=active]:text-black")}
              value="googleMapScrapper"
            >
              Google Map Scrapper
            </TabsTrigger>
          </TabsList>
          <TabsContent value="googleMapScrapper">
            <GoogleMapScrapperForm />
          </TabsContent>
        </Tabs>
      </div>
    </ReduxStoreProvider>
  );
};

export default GoogleMapScrapper;
