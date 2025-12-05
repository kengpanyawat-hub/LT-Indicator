// Prisma client singleton
// Note: Run "npx prisma generate" after setting up your database

// Model operations type
interface ModelOperations {
  findUnique: (args: unknown) => Promise<unknown>;
  findFirst: (args?: unknown) => Promise<unknown>;
  findMany: (args?: unknown) => Promise<unknown[]>;
  create: (args: unknown) => Promise<unknown>;
  update: (args: unknown) => Promise<unknown>;
  delete: (args: unknown) => Promise<unknown>;
  upsert: (args: unknown) => Promise<unknown>;
  count: (args?: unknown) => Promise<number>;
}

interface PrismaClientType {
  user: ModelOperations;
  businessProfile: ModelOperations;
  template: ModelOperations;
  generatedAsset: ModelOperations;
  aiAnalysis: ModelOperations;
}

let prisma: PrismaClientType;

try {
  const PrismaClientModule = require('@prisma/client');
  const PrismaClient = PrismaClientModule.PrismaClient;

  const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientType | undefined;
  };

  prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });

  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
  }
} catch {
  // Prisma client not generated yet - this is expected during build without DB
  console.warn('Prisma Client not initialized. Run "npx prisma generate" to initialize.');

  // Create a mock prisma client for build
  const createMockModel = (): ModelOperations => ({
    findUnique: () => Promise.resolve(null),
    findFirst: () => Promise.resolve(null),
    findMany: () => Promise.resolve([]),
    create: () => Promise.resolve(null),
    update: () => Promise.resolve(null),
    delete: () => Promise.resolve(null),
    upsert: () => Promise.resolve(null),
    count: () => Promise.resolve(0),
  });

  prisma = {
    user: createMockModel(),
    businessProfile: createMockModel(),
    template: createMockModel(),
    generatedAsset: createMockModel(),
    aiAnalysis: createMockModel(),
  };
}

export { prisma };
export default prisma;
