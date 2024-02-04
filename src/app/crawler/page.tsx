import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const Crawler = async () => {
  const session = await auth();
  return (
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
          <Card className="rounded">
            <CardHeader>
              <CardTitle>Amazon Porduct</CardTitle>
              <CardDescription>Place your product category url here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Textarea placeholder="product category url" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Initiate Crawl</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="review">
          <Card className="rounded">
            <CardHeader>
              <CardTitle>Amazon Review</CardTitle>
              <CardDescription>Place your product url here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Textarea placeholder="product url" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Initiate Crawl</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Crawler;
