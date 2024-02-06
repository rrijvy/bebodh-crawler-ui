import { auth } from "@/auth";
import { AmazonPorductCategoryScrapperForm } from "@/components/amazonPorductCategoryScrapperForm";
import { AmazonProductReviewScrapperForm } from "@/components/amazonProductReviewScrapperForm";
import { ReduxStoreProvider } from "@/components/reduxStoreProvider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const Crawler = async () => {
  return (
    <ReduxStoreProvider>
      <div className="w-4/12 pt-5 mx-auto">
        <Tabs defaultValue="product" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-teal-950 rounded">
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

export default Crawler;
