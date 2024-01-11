export {};
declare global {
  interface Window {
    apiStorage: Record<string, unknown> | undefined;
  }
}
