import { AmazonPorductCategoryScrapperForm } from "@/components/amazonPorductCategoryScrapperForm";
import { AmazonProductReviewScrapperForm } from "@/components/amazonProductReviewScrapperForm";
import { ReduxStoreProvider } from "@/components/reduxStoreProvider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const AmazonScrapper = async () => {
  return (
    <ReduxStoreProvider>
      <div className="mx-auto w-4/12 pt-5">
        <Tabs defaultValue="product" className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded bg-teal-950">
            <TabsTrigger className={cn("rounded text-white data-[state=active]:bg-white data-[state=active]:text-black")} value="product">
              Amazon Porduct
            </TabsTrigger>
            <TabsTrigger className={cn("rounded text-white data-[state=active]:bg-white data-[state=active]:text-black")} value="review">
              Amazon Review
            </TabsTrigger>
          </TabsList>
          <TabsContent value="product">
            <AmazonPorductCategoryScrapperForm />
          </TabsContent>
          <TabsContent value="review">
            <AmazonProductReviewScrapperForm />
          </TabsContent>
        </Tabs>
      </div>
    </ReduxStoreProvider>
  );
};

export default AmazonScrapper;
