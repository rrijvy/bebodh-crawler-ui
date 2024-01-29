export {};
declare global {
  var apiStorage: Record<string, unknown> | undefined;
  var prisma: PrismaClient | undefined;
}
