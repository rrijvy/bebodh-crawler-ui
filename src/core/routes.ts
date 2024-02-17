const clientApiRouteBaseUrl = process.env.NEXT_PUBLIC_API_URL;

export class UIRoutes {
  public static Dashboard = "/dashboard";
  public static Login = "/login";
  public static Register = "/register";
  public static AmazonScrapper = "/amazonScrapper";
  public static GoogleMapScrapper = "/googleMapScrapper";
  public static ProxyScheduler = "/proxyScheduler";
}

export class ClientApiRoutes {
  public static RunAmazonCategoryScrapper = `${clientApiRouteBaseUrl}/AmazonCrawler/RunAmazonCategoryScrapper`;
  public static RunAmazonReviewScrapper = `${clientApiRouteBaseUrl}/AmazonCrawler/RunAmazonReviewScrapper`;
  public static RunGoogleMapScrapper = `${clientApiRouteBaseUrl}/GoogleMapCrawler/RunGoogleMapScrapper`;
  public static AddOrUpdateProxyRetriverSchedule = `${clientApiRouteBaseUrl}/ProxyScheduler/AddOrUpdateProxyRetriverSchedule`;
  public static GetAllRecurringSchedules = `${clientApiRouteBaseUrl}/ProxyScheduler/GetAllRecurringSchedules`;
  public static DeleteProxySchedule = `${clientApiRouteBaseUrl}/ProxyScheduler/DeleteProxySchedule`;
}
