// Caching utilities
export const cache = {
  get: async <T>(key: string): Promise<T | null> => null,
  set: async (key: string, value: unknown, ttlSeconds?: number): Promise<void> => {},
};
