const clientApiRouteBaseUrl = process.env.NEXT_PUBLIC_API_URL;

export class UIRoutes {
  public static Dashboard = "/dashboard";
  public static Login = "/login";
  public static Register = "/register";
  public static Crawler = "/crawler";
  public static ProxyScheduler = "/proxyScheduler";
}

export class ClientApiRoutes {
  public static RunAmazonCategoryScrapper = `${clientApiRouteBaseUrl}/AmazonCrawler/RunAmazonCategoryScrapper`;
  public static RunAmazonReviewScrapper = `${clientApiRouteBaseUrl}/AmazonCrawler/runAmazonReviewScrapper`;
  public static AddOrUpdateProxyRetriverSchedule = `${clientApiRouteBaseUrl}/ProxyScheduler/AddOrUpdateProxyRetriverSchedule`;
}
