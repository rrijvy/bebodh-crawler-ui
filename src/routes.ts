/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/dashboard"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error", "/auth/reset", "/auth/new-password"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";

export const apiRouteBaseUrl = process.env.API_URL;

export const apiRoutes = {
  login: `${apiRouteBaseUrl}/Auth/SignIn`,
  register: `${apiRouteBaseUrl}/Auth/Register`,
  runAmazonCategoryScrapper: `${apiRouteBaseUrl}/AmazonCrawler/RunAmazonCategoryScrapper`,
  runAmazonReviewScrapper: `${apiRouteBaseUrl}/AmazonCrawler/runAmazonReviewScrapper`,
  addOrUpdateProxyRetriverSchedule: `${apiRouteBaseUrl}/ProxyScheduler/AddOrUpdateProxyRetriverSchedule`,
  getAllRecurringSchedules: `${apiRouteBaseUrl}/ProxyScheduler/GetAllRecurringSchedules`,
  deleteProxySchedule: `${apiRouteBaseUrl}/ProxyScheduler/DeleteProxySchedule`,
  runGoogleMapScrapper: `${apiRouteBaseUrl}/GoogleMapCrawler/RunGoogleMapScrapper`,
};
