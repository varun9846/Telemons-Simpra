import { redis } from "@/lib/redis";

export const CACHE_TTL = {
    CATALOG_LIST: 60 * 5,        // 5 min
    PRODUCT_DETAIL: 60 * 20,     // 20 min
    PDF_DATA: 60 * 20,           // 20 min
} as const;

export async function getOrSetCache<T>(key: string, ttlSeconds: number, fetcher: () => Promise<T>): Promise<T> {
    try {
        const cached = await redis.get(key);
        if (cached) {
            console.log(`Cache hit for key: ${key}`);
            return JSON.parse(cached) as T;
        }
    } catch (error) {
        console.error(`Redis GET failed for key ${key}:`, error);
    }

    const freshData = await fetcher();

    try {
        await redis.set(key, JSON.stringify(freshData), "EX", ttlSeconds);
        console.log(`Cache set for key: ${key}`);
    } catch (error) {
        console.error(`Redis SET failed for key ${key}:`, error);
    }

    return freshData;
}

export async function deleteCacheByPattern(pattern: string) {
    try {
        const keys = await redis.keys(pattern);
        if (keys.length) {
            await redis.del(...keys);
        }
    } catch (error) {
        console.error(`Redis delete pattern failed for ${pattern}:`, error);
    }
}